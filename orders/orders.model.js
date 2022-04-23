const orders = [
  {
    id: 1,
    purchaseDate: new Date(),
    consentDate: "",
    awaitingApproval: "",
    userId: 1,
    items: [],
  },
];

function getAllOrders() {
  return orders;
}

function getOrderById(id) {
  return orders.find((order) => order.id === id);
}

function getOrderByUser(userId) {
  return orders.find((order) => order.userId === userId);
}

module.exports = {
  getAllOrders,
  getOrderById,
  getOrderByUser,
};
