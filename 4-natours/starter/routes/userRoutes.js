const express = require('express');
const userController = require('../controllers/userController');

const { getAllUsers, createUser, getUser, updateUser, deleteUser } =
  userController;

const router = express.Router();

router.route('/api/v1/users').get(getAllUsers).post(createUser);
router
  .route('/api/v1/users/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;
