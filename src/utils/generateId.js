function generateId() {
  return 'ORD' + Math.floor(Math.random() * 100000);
}

module.exports = generateId;