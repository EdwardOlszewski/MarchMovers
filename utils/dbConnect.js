import mongoose from 'mongoose'

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })

    console.log('MongoDB Connection: Success')
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}
export default dbConnect
