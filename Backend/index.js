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

//   const DB = process.env.DATABASE_STRING.replace("<db_password>" , `${process.env.DATABASE_password}`)

// mongoose.connect(DB).then(() => console.log('Connected to database...'))

// const port = process.env.PORT || 8000

// app.listen(port, () => {
//     console.log('Connected to port successfully')
// })

if (process.env.NODE_ENV !== 'production') {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  }

module.exports = app;