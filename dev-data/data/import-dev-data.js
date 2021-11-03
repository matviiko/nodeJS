const dotenv = require('dotenv');
const fs = require('fs');
const mongoose = require('mongoose');

dotenv.config({ path: './confiq.env' });

const Tour = require('./../../models/tourModel');

const DB = process.env.DATABASE_LOCAL;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful!!'))
  .catch(() => console.log('DB connection unsuccessful!!'));

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'))

//import data
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('data success load');
  } catch (e) {
    console.log(e);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Delete successfully data' );
    process.exit();
  } catch (e) {
    console.log(e);
  }
}

if(process.argv[2] === '--import') {
  importData().then()
} else if(process.argv[2] === '--delete') {
  deleteData().then()
}

console.log(process.argv);
