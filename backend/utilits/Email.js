import nodemailer from "nodemailer";

export default class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.firstName;
    this.url = url;
    this.form = `<${process.env.EMAIL_FROM}> فريق موقع التاريخ الاسلامي`;
  }

  newTransport() {
    return nodemailer.createTransport({
      service: "SendGrid",
      auth: {
        user: process.env.SENDGRID_USERNAME,
        pass: process.env.SENDGRID_PASSWORD,
      },
    });
  }

  async send(subject) {
    const html = `
    <h1>${this.firstName}</h1>
    <h2>${subject}</h2>
    <a href=${this.url}><bold>إعادة كلمة السر</bold></a>`;

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
    };

    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send("مرحبا", "مرحبا بكم في عائلة التاريخ الاسلامي");
  }

  async sendPasswordReset() {
    await this.send(
      "إعادة كلمة المرور",
      "رمز إعادة تعيين كلمة المرور (صالح لمدة 10 دقائق فقط)"
    );
  }
}
