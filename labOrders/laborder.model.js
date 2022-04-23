const labOrders = [
  {
    id: 1,
    userId: 1,
    status: "shipped",
    creaatedAt: new Date(),
  },
];

function LabOrderByUserId(id) {
  return labOrders.find((kit) => kit.userId === id);
}

module.exports = {
  LabOrderByUserId,
};
