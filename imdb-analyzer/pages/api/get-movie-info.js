require('dotenv').config()
const axios = require('axios')

const API_URL = 'https://movie-database-imdb-alternative.p.rapidapi.com/'

async function getDetails(movie) {
    console.log(typeof API_URL)

    let config = {
        method: 'GET',
        url: API_URL,
        params: { s: movie, r: 'json', page: 1 },
        headers: {
            'x-rapidapi-host': process.env.RAPID_API_HOST,
            'x-rapidapi-key': process.env.RAPID_API_SECRET
        }
    }

    try {
        const response = await axios.get(API_URL, config)
        console.log(response.data)
    } catch (error) {
        console.error(error)
        return error
    }
}

export default function handler(req, res) {
    let movie = req.query.movie
    getDetails(movie)
    res.status(200).json({ name: 'John Doe' })
}
