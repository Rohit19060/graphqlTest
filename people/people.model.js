const people = [
  {
    id: 1,
    name: "Chani",
    age: "28",
    partner: null,
    access: true,
    state: "8 Weeks Pregnanant",
    phone: "123456789",
    email: "chani@gmail.com",
    address: "123 Main St",
    city: "New York",
    zip: "10001",
    country: "USA",
    createdAt: new Date(),
  },
];

function getAllpeople() {
  return people;
}

function getPeopleById(id) {
  return people.find((person) => person.id === id);
}

module.exports = {
  getAllpeople,
  getPeopleById,
};
