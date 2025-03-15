const createError = require('http-errors');
const express = require('express');
const path = require('path');

const searchRouter = require('./routes/movies/searchRoute');
const trendingRouter = require('./routes/movies/trendingRoute');
const streamMovieRouter = require('./routes/movies/streamMovie');
const latestMovieRouter = require('./routes/movies/latestMovie');
const recommendationsMovies = require('./routes/movies/recommendationsMovies');
const recentEpisodesRouter = require('./routes/anime/recentEpisodes');
const searchAnime = require("./routes/anime/searchAnime")
const animeDetails = require("./routes/anime/animeDetails")
const getAnimeEpisodes = require("./routes/anime/getAnimeEpisodes")
const streamAnimeEpisodeRoute = require("./routes/anime/streamAnimeEpisode")

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Make sure you register the router here
app.use('/movies/search', searchRouter); // Corrected to use the root path for the router
app.use('/movies/trending', trendingRouter);
app.use('/movies/stream', streamMovieRouter);
app.use('/movies/recommendations', recommendationsMovies);
app.use('/movies', latestMovieRouter);
app.use('/anime/search', searchAnime);
app.use('/anime/info', animeDetails);
app.use('/anime/episodes', getAnimeEpisodes);
app.use('/anime/episodes/stream', streamAnimeEpisodeRoute);

app.use('/anime/latest', recentEpisodesRouter);
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
