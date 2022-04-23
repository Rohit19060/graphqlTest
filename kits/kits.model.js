const kits = [
  {
    id: 1,
    shipped: false,
    arrivalDate: new Date(),
    shippeDToLab: false,
    registrationNumber: "465465132",
    createdAt: new Date(),
  },
];

function getAllkits() {
  return kits;
}

function getKitById(id) {
  return kits.find((kit) => kit.id === id);
}

module.exports = {
  getAllkits,
  getKitById,
};
