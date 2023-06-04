require('dotenv').config()

module.exports = {
  secret: process.env.SECRET,
  roles: ['ADMIN', 'CUSTOMER', 'DRIVER']
}
