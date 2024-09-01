import axios from "axios"

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async({page_number = 1, page_size=10, limit=30}) => {
    console.log(BASE_URL);
    try {
        const response = await axios.get(`${BASE_URL}search`,{
            params: {
                apiKey: API_KEY,
                page_number,
                page_size,
                limit,
            }
        })
        return response.data
    } catch(error) {
        console.log("It's error on get news request: ")
        console.log(error)
    }
}

export const getCategories = async() => {
    console.log(BASE_URL);
    try {
        const response = await axios.get(`${BASE_URL}available/categories`,{
            params: {
                apiKey: API_KEY,
            }
        })
        return response.data
    } catch(error) {
        console.log("It's error on get categories request: ")
        console.log(error)
    }
}