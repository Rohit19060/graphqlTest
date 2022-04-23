const history = [
  {
    id: 1,
    userId: 1,
    createdAt: new Date(),
  },
];

function historyByUserId(id) {
  return history.find((history) => history.userId === id);
}
module.exports = {
  historyByUserId,
};
