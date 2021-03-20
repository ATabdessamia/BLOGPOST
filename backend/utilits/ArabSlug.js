export default (slug) => {
  let TheSlug = slug;

  //trim First Space
  TheSlug = TheSlug.replace(/^[\ ]+/, "");

  //trim Last Space
  TheSlug = TheSlug.replace(/[\ ]+$/, "");

  //Remove Symbol -
  TheSlug = TheSlug.replace(/\-{1,}/g, "");

  //Replace & To And
  TheSlug = TheSlug.replace(/[\&]+/g, "And");

  //Two White Space Or More
  TheSlug = TheSlug.replace(/\ {2,}/, " ");

  //To Lower Case
  TheSlug = TheSlug.toLocaleLowerCase();

  // Replace Space To Dash
  TheSlug = TheSlug.replace(/\s+/g, "-");

  return TheSlug;
};
