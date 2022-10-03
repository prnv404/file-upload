const multer = require('multer')
const path = require('path')
const imageStorage = multer.diskStorage({

 /* Creating a storage for the image to be uploaded. */
  destination: path.join(__dirname, '../uploads'),
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + '_' + Date.now() + path.extname(file.originalname)
    )
  },
})

const imageUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 1000000, 
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      return cb(new Error('Please upload a Image'))
    }
    cb(undefined, true)
  },
})

module.exports = imageUpload
