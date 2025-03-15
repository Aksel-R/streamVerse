var express = require('express');
var router = express.Router();
const { streamAnimeEpisode } = require("../../controller/anime/streamAnimeEpisode");


router.get('/:query/:season/:episode', async function (req, res, next) {
  const query = req.params.query;
  const season = req.params.season;
  const episode = req.params.episode;
  let results = await streamAnimeEpisode(query,season,episode);
  res.send(results);
});

module.exports = router;
