const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models/index');
const User = require('../models').User;
const Customer = require('../models').Customer;
const Admin = require('../models').Admin;
const Driver = require('../models').Driver;
const Role = require('../models').Role;
const Op = db.Sequelize.Op;
const userId = require('../utils/user_id_generator');
const config = require('../config/configRoles');

module.exports = {
  async signUp(req, res) {
    try {
      const user = await User.create({
        id: await userId.generateUserId(),
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        created_at: new Date(),
        updated_at: new Date()
      });

      const roles = await Role.findAll({
        where: {
          name: {
            [Op.or]: req.body.roles
          }
        }
      });

      await user.setRoles(roles);

      req.body.roles.forEach(async (role) => {
        switch (role.toLowerCase()) {
          case 'admin':
            await Admin.create({
              user_id: user.id,
              created_at: new Date(),
              updated_at: new Date()
            });
            break;
          case 'customer':
            await Customer.create({
              user_id: user.id,
              created_at: new Date(),
              updated_at: new Date()
            });
            break;
          case 'driver':
            await Driver.create({
              user_id: user.id,
              created_at: new Date(),
              updated_at: new Date()
            });
            break;
        }
      });

      res.status(200).send({
        auth: true,
        id: req.body.id,
        message: 'User registered successfully!',
        errors: null
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        auth: false,
        id: req.body.id,
        message: 'Error',
        errors: err
      });
    }
  },

  async signIn(req, res) {
    try {
      const user = await User.findOne({
        where: {
          id: req.body.id
        }
      });

      if (!user) {
        return res.status(404).send({
          auth: false,
          id: req.body.id,
          accessToken: null,
          message: 'Error',
          errors: 'User Not Found.'
        });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          auth: false,
          id: req.body.id,
          accessToken: null,
          message: 'Error',
          errors: 'Invalid Password!'
        });
      }

      const token =
        'Bearer ' +
        jwt.sign(
          { id: user.id },
          config.secret,
          { expiresIn: 86400 } // 24h expired
        );

      res.status(200).send({
        auth: true,
        id: req.body.id,
        accessToken: token,
        message: 'Error',
        errors: null
      });
    } catch (err) {
      res.status(500).send({
        auth: false,
        id: req.body.id,
        accessToken: null,
        message: 'Error',
        errors: err
      });
    }
  }
};
