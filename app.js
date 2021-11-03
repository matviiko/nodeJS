const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')


const app = express();
app.use(express.json());

app.use((req, res, next) => {
  next();
});

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Routers

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;

