require('dotenv').config();

module.exports = {
    env: {
        MONGO_URI = process.env.MONGO_URI,
        PRODUCTION_URL = process.env.PRODUCTION_URL,
    }

}