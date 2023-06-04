const User = require('../models').User;
const userId = require('../utils/user_id_generator');
const config = require('../config/configRoles');
const roles = config.roles;

const generatedId = async () => {
  return await userId.generateUserId()
};

module.exports = {

  async checkDuplicateUserNameOrEmail(req, res, next) {
    try {
      const existingUser = await User.findOne({
        where: {
          id: await generatedId()
        }
      });

      if (existingUser) {
        return res.status(400).send({
          auth: false,
          id: await generatedId(),
          message: 'Error',
          errors: 'Id is already taken!'
        });
      }

      const userWithEmail = await User.findOne({
        where: {
          email: req.body.email
        }
      });

      if (userWithEmail) {
        return res.status(400).send({
          auth: false,
          id: await generatedId(),
          message: 'Error',
          errors: 'Email is already taken!'
        });
      }

      next();
    } catch (error) {
      console.error(error);
      res.status(500).send({
        auth: false,
        message: 'Error',
        errors: 'Server error'
      });
    }
  },

  async checkRolesExisted(req, res, next) {
    const invalidRoles = req.body.roles.filter(
      (role) => !roles.includes(role.toUpperCase())
    );

    if (invalidRoles.length > 0) {
      return res.status(400).send({
        auth: false,
        id: await generatedId(),
        message: 'Error',
        errors: `Does NOT exist Role(s): ${invalidRoles.join(', ')}`
      });
    }

    next();
  }
};
