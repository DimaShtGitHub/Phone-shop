require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const sessions = require('express-session');
const FileStore = require('session-file-store')(sessions);
const fileUpload = require('express-fileupload');
const path = require('path');
const hbs = require('hbs')


const logger = require('morgan');
const {sequelize} = require('./db/models');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const orderRouter = require('./routes/orderRouter');

const deviceRouter = require('./routes/deviceRouter');

const adminRouter = require('./routes/admin');


const app = express();

const PORT = process.env.PORT ?? 3100;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerHelper('ifeq', function (a, b, options) {
  if (a == b) { return 'active' }
  return 
  }); 


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload({}));
app.use(sessions({
    store: new FileStore(),
    name: 'aid',
    secret: process.env.SESSION_SECRET ?? 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 30,
      httpOnly: true
    }
  }
))

app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials((path.join(__dirname, 'views', 'partials')))

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/device', deviceRouter)
app.use('/order', orderRouter)

app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, async () => {
  console.log('Сервер слушает порт', PORT);

  try {
    await sequelize.authenticate();
    console.log('Подключение к БД успешно');
  } catch (error) {
    console.log('Не удалось подключиться к БД');
    console.log(error.message);
  }
});
