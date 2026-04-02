const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('../middlewares/authMiddleware');
const listingController = require('../controllers/listingController');
const upload = require('../middlewares/uploadMiddleware');

// All routes here are protected and restricted to "Owner" role
router.use(protect, restrictTo('Owner'));

router.route('/my-listings')
  .get(listingController.getOwnerListings);

router.route('/')
  .post(upload.array('photos', 10), listingController.createListing);

router.route('/:id')
  .get(listingController.getListingById)
  .patch(upload.array('photos', 10), listingController.updateListing)
  .delete(listingController.deleteListing);

module.exports = router;
