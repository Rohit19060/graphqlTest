const { getAllpeople, getPeopleById } = require("./people.model");

module.exports = {
  Query: {
    people: () => getAllpeople(),
    peopleById: (parent, args) => getPeopleById(args.id),
  },
};
