const { historyByUserId } = require("./history.model");

module.exports = {
  Query: {
    historyByUserId: (parent, args, context, info) => historyByUserId(args.id),
  },
};
