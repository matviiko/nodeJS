const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './confiq.env' });
const app = require('./app');

const DB = process.env.DATABASE_LOCAL;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful!!'))
  .catch(() => console.log('DB connection unsuccessful!!'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
