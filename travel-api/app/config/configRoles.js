require('dotenv').config()

module.exports = {
  secret: process.env.SECRET,
  roles: ['Admin', 'Customer', 'Driver']
}
