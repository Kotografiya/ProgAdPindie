const usersRouter = require("express").Router();

const {
     sendAllUsers,
     sendUserCreated,
      sendUserById, 
      sendUserUpdated, 
      sendUserDeleted ,
    } = require('../controllers/users');

const { 
    findAllUsers,
     createUser, 
     findUserById,
      updateUser,
       deleteUser, 
       checkEmptyNameAndEmailAndPassword,
        checkEmptyNameAndEmail,
         checkIsUserExists 
        } = require('../middlewares/users')
 
usersRouter.get(
    '/users',
 findAllUsers, 
 sendAllUsers
);
usersRouter.get(
    "/user/:id", 
    findUserById, 
    sendUserById
);
usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    createUser,
    sendUserCreated
  );
  
  usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    updateUser,
    sendUserUpdated
  ); 
usersRouter.delete(
    "/users/:id", 
    deleteUser, 
    sendUserDeleted
);

module.exports = usersRouter