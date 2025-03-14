var createError = require('http-errors');
var express = require('express');
var path = require('path');

var searchRouter = require('./routes/movies/searchRoute');
var trendingRouter = require('./routes/movies/trendingRoute');
var stramMovieRouter = require('./routes/movies/streamMovie');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Make sure you register the router here
app.use('/movies/search', searchRouter); // Corrected to use the root path for the router
app.use('/movies/trending', trendingRouter);
app.use('/movies/stream', stramMovieRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
