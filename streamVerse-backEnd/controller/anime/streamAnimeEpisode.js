require('dotenv').config();  // Make sure to load the environment variables before using them
const axios = require("axios");
const apiKey = process.env.TMDB_API_KEY;
const tmdbUrl = process.env.TMDB_URL;
const EMBED_URL = process.env.EMBED_URL
const vidbinge= process.env.vidbinge
// const vidsrcUrl =process.env.VIDSRC_URLS
const vidsrcUrls = process.env.VIDSRC_URLS.split(',');

const urls = [
    vidbinge+"/tv/",
    "https://vidsrc.xyz/embed/tv/",
    "https://vidsrc.xyz/embed/tv?tmdb=",
    EMBED_URL+"/embed/tv/"
  ];
  
  console.log(urls);
  


const streamAnimeEpisode = async (query,season,episode) => {
    let sources = []
    for(var i=0;i<urls.length;i++){
sources.push(urls[i]+query+"/"+season+"/"+episode)

    }
    
    
  return sources
};

module.exports = { streamAnimeEpisode };