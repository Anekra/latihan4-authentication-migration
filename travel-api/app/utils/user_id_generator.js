const User = require('../models').User;

module.exports = {
  async generateUserId() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = String(currentDate.getFullYear()).slice(-2);

    const totalRows = await User.count();
    const name = User.codeName;

    const userNumber = String(totalRows + 1).padStart(4, '0');

    return `${name}${day}${month}${year}${userNumber}`;
  }
};
