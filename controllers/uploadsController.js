const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const cloudinary = require('cloudinary')
const fs = require('fs')
const uploadProductImageLocal = async (req, res) => {
  const productImage = req.file.filename
  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage}` } })
}

const uploadProductImage = async (req, res) => {
  // console.log(req.file.path)
  const result = await cloudinary.uploader.upload(req.file.path, {
    use_filename: true,
    folder: 'fileupload',
  })

  fs.unlinkSync(req.file.path)
  console.log(result)
  return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } })
}

module.exports = uploadProductImage
