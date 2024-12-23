const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path : "./config.env"})
const app = require('./app');

// const DB = process.env.DATABASE_STRING.replace("<db_password>" , `${process.env.DATABASE_password}`)

// mongoose.connect(DB).then(() => console.log('Connected to database...'))
app.get('/test-db', async (req, res) => {
    try {
        await mongoose.connect(process.env.DATABASE_STRING.replace("<db_password>" , `${process.env.DATABASE_password}`));
        res.json({ message: 'DB connected successfully!' });
    } catch (err) {
        res.status(500).json({ error: 'DB connection failed', details: err });
    }
});

const port = process.env.PORT || 8000


app.listen(port, () => {
    console.log('Connected to port successfully')
})