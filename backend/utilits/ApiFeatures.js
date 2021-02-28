class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    // query
    const queryObj = { ...this.queryString };
    const excludedFields = ["sort", "page", "limit"];
    excludedFields.forEach((el) => delete queryObj[el]);

    //filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\bgt|gte|lt|lte\b/g, (match) => `$${match}`);

    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  sort() {
    //sorting
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query.sort(sortBy);
    } else {
      this.query.sort("-createdAt");
    }

    return this;
  }

  paginate() {
    //pagination
    const page = +this.queryString.page || 1; //by default 1
    const limit = +this.queryString.limit || 100; // by default 100
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

export default APIFeatures;
