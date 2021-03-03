import nodemailer from "nodemailer";

export default class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.firstName;
    this.url = url;
    this.from = process.env.EMAIL_FROM;
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
    <h1>فريق موقع التاريخ الاسلامي</h1>
    <h1>${subject} ${this.firstName}</h1>
    <a href=${this.url}><bold>إعادة كلمة السر</bold></a>`;

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
    };

    await this.newTransport().sendMail(mailOptions);
  }

  async sendPasswordReset() {
    await this.send(
      "إعادة كلمة المرور",
      "رمز إعادة تعيين كلمة المرور (صالح لمدة 10 دقائق فقط)"
    );
  }
}
