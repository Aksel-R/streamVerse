require('dotenv').config();  // Make sure to load the environment variables before using them
const axios = require("axios");
const apiKey = process.env.TMDB_API_KEY;
const tmdbUrl = process.env.TMDB_URL;

const searchAnime = async (query,pageN) => {
    console.log(`${tmdbUrl}search/tv?query=${query}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`);
    
    try {
        // Making the API request using axios
        const response = await axios.get(`${tmdbUrl}/search/tv?query=${query}&include_adult=false&language=en-US&page=${pageN}&api_key=${apiKey}`);
        const response2 = await axios.get(`https://api.animeparadise.moe/search?q=${query}`);
        
        // Returning the result from the API request
        const filteredData = response.data.results.filter(el =>{ 
          console.log(el.original_language === "ja");
          
         return el.original_language === "ja"
         
         
        } )
        console.log(response2);
        return [filteredData,response2.data];
    } catch (error) {
        console.error(`Error fetching movie data: ${error}`);
        return { error: 'Failed to fetch movie data' };  // Return an error message or object
    }
};

module.exports = { searchAnime };
