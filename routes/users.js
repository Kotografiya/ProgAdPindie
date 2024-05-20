const usersRouter = require("express").Router();

const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated } = require('../controllers/users');
const { findAllUsers, createUser, findUserById, updateUser } = require('../middlewares/users')
 
usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.get("/user/:id", findUserById, sendUserById);
usersRouter.post('/users', createUser, sendUserCreated);
usersRouter.put( "/users/:id",updateUser, sendUserUpdated ); 

module.exports = usersRouter