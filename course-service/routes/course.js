const express = require('express');

const { courseController } = require('../controllers');

const router = express.Router();

router.post('/', courseController.create);
router.get('/', courseController.findAll);
router.get('/:userId', courseController.findOne);
router.put('/:userId', courseController.update);
router.delete('/:userId', courseController.purge);

module.exports = router;
