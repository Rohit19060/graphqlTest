const tests = [
  {
    id: 1,
    name: "test1",
    status: "awaiting",
    kit: {
      id: 1,
      shipped: false,
      arrivalDate: new Date(),
      shippeDToLab: false,
      registrationNumber: "465465132",
      createdAt: new Date(),
    },
  },
];

function getAlltests() {
  return tests;
}

function gettestById(id) {
  return tests.find((test) => test.id === id);
}

module.exports = {
    getAlltests,
    gettestById,
};
