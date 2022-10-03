const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const cloudinary = require('cloudinary')
const fs = require('fs')

/**
 * It uploads the image to cloudinary and returns the image url
 * @param req - The request object.
 * @param res - The response object.
 * @returns The image is being returned.
 */
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
