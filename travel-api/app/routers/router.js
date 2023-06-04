const controllers = require('../controllers');

module.exports = function (app) {
  // User Auth
  app.post(
    '/api/auth/signup',
    [
      controllers.verifySignUp.checkDuplicateUserNameOrEmail,
      controllers.verifySignUp.checkRolesExisted
    ],
    controllers.verifySign.signUp
  );

  app.post('/api/auth/signin', controllers.verifySign.signIn);

  // Status
  app.get('/api/status', controllers.status.list);
  app.get(
    '/api/statususer',
    [controllers.verifyJwtToken.verifyToken],
    controllers.status.listStatusUser
  );
  app.get(
    '/api/status/:id',
    [controllers.verifyJwtToken.verifyToken, controllers.verifyJwtToken.isAdmin],
    controllers.status.getById
  );
  app.post(
    '/api/status',
    [controllers.verifyJwtToken.verifyToken, controllers.verifyJwtToken.isAdmin],
    controllers.status.add
  );
  app.put(
    '/api/status/:id',
    [controllers.verifyJwtToken.verifyToken, controllers.verifyJwtToken.isAdmin],
    controllers.status.update
  );
  app.delete(
    '/api/status/:id',
    [controllers.verifyJwtToken.verifyToken, controllers.verifyJwtToken.isAdmin],
    controllers.status.delete
  );
};
