const { getAlltests, gettestById } = require("./test.model");

module.exports = {
  Query: {
    tests: () => getAlltests(),
    testById: (parent, args) => gettestById(args.id),
  },
};
