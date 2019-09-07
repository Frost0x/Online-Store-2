const mongoose = require('mongoose')

const { db, devHost } = require('../etc/config.json')

const host = process.env.NODE_ENV === 'development' ? devHost
: db.host

exports.setUpConnection = () => {
    mongoose.connect(`mongodb://${host}:${db.port}/${db.name}`)
    mongoose.set('useCreateIndex', true)
    mongoose.set('useNewUrlParser', true)
    mongoose.set('useFindAndModify', false)
    mongoose.connection.on(`error`, err => console.log(`Connection error: ${err}`))
    mongoose.connection.once(`open`, () => console.log(`DB connected`))
}