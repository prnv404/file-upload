const express = require('express')
const router = express.Router()
const {
  getAllProduct,
  createProduct,
} = require('../controllers/productController')
const uploadProductImage = require('../controllers/uploadsController')
const imageUpload = require('../middleware/multer')

router.route('/').post(createProduct).get(getAllProduct)
router.route('/uploads').post(imageUpload.single('image'), uploadProductImage)

module.exports = router
