const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path : "./config.env"})
const app = require('./app');

const connectDB = async () => {
    try {
      const DB = process.env.DATABASE_STRING.replace(
        "<db_password>",
        `${process.env.DATABASE_password}`
      );
  
      await mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      console.log('Connected to database...');
    } catch (error) {
      console.error('Database connection failed:', error.message);
      process.exit(1);  // Exit the process with failure
    }
  };
  
  connectDB();
  

const port = process.env.PORT || 8000


app.listen(port, () => {
    console.log('Connected to port successfully')
})