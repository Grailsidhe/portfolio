const express = require('express');
const authRouter = express.Router();
const { register, login, deleteUsers, users } = require('../controller/auth');


authRouter.route('/register').post(register);
authRouter.route('/login').post(login);
authRouter.route('/:id').delete(deleteUsers);
authRouter.route('/').get(users);

module.exports = authRouter; 