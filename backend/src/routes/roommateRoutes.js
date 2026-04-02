const express = require('express');
const router = express.Router();
const { protect, protectOptional } = require('../middlewares/authMiddleware');
const roommateController = require('../controllers/roommateController');

// Public routes
router.route('/')
  .get(protectOptional, roommateController.getPosts)
  .post(protect, roommateController.createPost);

router.route('/:id')
  .get(protectOptional, roommateController.getPostById)
  .patch(protect, roommateController.updatePost)
  .delete(protect, roommateController.deletePost);

module.exports = router;
