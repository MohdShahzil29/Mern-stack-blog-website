const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Mongo Db connected ${connect.connection.host}`)
    } catch (error) {
        console.log('Error to connecting MONGO_DB')
    }
}

module.exports = {connectDb}