const express = require('express');

const { userController } = require('../controllers');

const router = express.Router();

router.put('/forgetPassword', userController.forgetPassword);
router.get('/', userController.findAll);
router.post('/', userController.create);
router.post('/signIn', userController.signIn);
router.get('/:userId', userController.findOne);
router.put('/:userId', userController.update);
router.delete('/:userId', userController.purge);
router.put(
  '/changeCurrentUserPassword',
  userController.changeCurrentUserPassword
);
router.get('/resetPassword/:token', userController.resetPassword);
module.exports = router;
