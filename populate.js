
require('dotenv').config()
const connectDb = require('./db/connect')
const Product = require('./models/Product')

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI)
    await Product.deleteMany({})
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(0)
  }
}
start()
