const { getAllkits, getKitById } = require("./kits.model");

module.exports = {
  Query: {
    kits: () => getAllkits(),
    kitsById: (parent, args) => getKitById(args.id),
  },
};
