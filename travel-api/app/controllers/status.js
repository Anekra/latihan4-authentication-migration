const Status = require('../models').Status;

module.exports = {
  async getById(req, res) {
    try {
      const doc = await Status.findByPk(req.params.id, {
        include: []
      });

      if (!doc) {
        return res.status(404).send({
          status_response: 'Not Found',
          errors: 'Status Not Found'
        });
      }

      const status = {
        status_response: 'OK',
        status: doc,
        errors: null
      };

      return res.status(200).send(status);
    } catch (error) {
      res.status(400).send({
        status_response: 'Bad Request',
        errors: error
      });
    }
  },

  async list(req, res) {
    try {
      const docs = await Status.findAll({
        limit: 10,
        include: [],
        order: [['createdAt', 'DESC']]
      });

      const statuses = {
        status_response: 'OK',
        count: docs.length,
        statuses: docs.map((doc) => doc),
        errors: null
      };

      res.status(200).send(statuses);
    } catch (error) {
      res.status(400).send({
        status_response: 'Bad Request',
        errors: error
      });
    }
  },

  async listStatusUser(req, res) {
    try {
      const docs = await Status.findAll({
        limit: 10,
        include: [],
        where: {
          user_id: req.userId
        },
        order: [['createdAt', 'DESC']]
      });

      const statuses = {
        status_response: 'OK',
        count: docs.length,
        statuses: docs.map((doc) => doc),
        errors: null
      };

      res.status(200).send(statuses);
    } catch (error) {
      res.status(400).send({
        status_response: 'Bad Request',
        errors: error
      });
    }
  },

  async add(req, res) {
    try {
      const doc = await Status.create({
        title: req.body.title,
        body: req.body.body,
        user_id: req.userId
      });

      const status = {
        status_response: 'Created',
        status: doc,
        errors: null
      };

      return res.status(201).send(status);
    } catch (error) {
      res.status(400).send({
        status_response: 'Bad Request',
        errors: error
      });
    }
  },

  async update(req, res) {
    try {
      const status = await Status.findByPk(req.params.id, {});

      if (!status) {
        return res.status(404).send({
          status_response: 'Bad Request',
          errors: 'Status Not Found'
        });
      }

      if (status.user_id !== req.userId) {
        return res.status(403).send({
          status_response: 'Bad Request',
          errors: 'Different User Id'
        });
      }

      const updatedStatus = await status.update({
        title: req.body.title || status.title,
        body: req.body.body || status.body
      });

      const updatedResponse = {
        status_response: 'OK',
        status: updatedStatus,
        errors: null
      };

      return res.status(200).send(updatedResponse);
    } catch (error) {
      res.status(400).send({
        status_response: 'Bad Request',
        errors: error
      });
    }
  },

  async delete(req, res) {
    try {
      const status = await Status.findByPk(req.params.id);

      if (!status) {
        return res.status(400).send({
          status_response: 'Bad Request',
          errors: 'Status Not Found'
        });
      }

      if (status.user_id !== req.userId) {
        return res.status(403).send({
          status_response: 'Bad Request',
          errors: 'Different User Id'
        });
      }

      await status.destroy();

      res.status(204).send({
        status_response: 'No Content',
        errors: null
      });
    } catch (error) {
      res.status(400).send({
        status_response: 'Bad Request',
        errors: error
      });
    }
  }
};
