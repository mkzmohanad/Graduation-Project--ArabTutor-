const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path : "./config.env"})
const app = require('./app');

const DB = process.env.DATABASE_STRING.replace("<db_password>" , `${process.env.DATABASE_password}`)

mongoose.connect(DB).then(() => console.log('Connected to database...'))

const port = process.env.PORT || 8000


app.listen(port, () => {
    console.log('Connected to port successfully')
})

// username : mohanadshohdy633
// password : B7TBIzaBMmKkzVPI
// mongodb+srv://mohanadshohdy633:<db_password>@cluster0.rmc2n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
