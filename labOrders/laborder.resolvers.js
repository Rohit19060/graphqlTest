const { LabOrderByUserId } = require("./laborder.model");

module.exports = {
  Query: {
    LabOrderByUserId: (parent, args, context, info) => {
      return LabOrderByUserId(args.id);
    },
  },
};
