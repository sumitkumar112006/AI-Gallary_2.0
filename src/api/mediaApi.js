import axios from "axios";
import { renderGif } from '@giphy/js-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const PEXCEL_KEY = import.meta.env.VITE_PEXCEL_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;
const gf = new GiphyFetch(GIPHY_KEY);

export async function getPhoto(query, page = 1, per_page = 20) {
    const response = await axios.get(`https://api.unsplash.com/search/photos`,
        {
            params: { query, page, per_page },
            headers:{Authorization:`Client-ID ${UNSPLASH_ACCESS_KEY}`}

        }
    )

    return (response.data);

}  

export async function getVideo(query, per_page=15) {
    const response = await axios.get(`https://api.pexels.com/v1/videos/search`,
        {
            params: { query, per_page },
            headers: { Authorization: `${PEXCEL_KEY}` }

        }
    )

    return (response.data);
}

export async function getGif(query) {
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${GIPHY_KEY}&limit=20`)
    return (res.data);
}