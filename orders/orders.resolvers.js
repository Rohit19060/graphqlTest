const {
  getAllOrders,
  getOrderById,
  getOrderByUser,
} = require("./orders.model");

module.exports = {
  Query: {
    orders: () => getAllOrders(),
    orderById: (parent, args) => getOrderById(args.id),
    orderByUserId: (parent, args) => getOrderByUser(args.userId),
  },
};
