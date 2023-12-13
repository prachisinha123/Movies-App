// import axios from "axios";


// // const URL = "https://api.themoviedb.org/3";
// const URL = "https://demo.credy.in/api/v1/maya/movies/";

// const API_KEY = "04e22d9a0c6490fcb0c34b6b00d8894e";

//  const endpoints = {
//         originals: "/discover/tv",
//         trending: "/trending/all/week",
//         now_playing: "/movie/now_playing", 
//         popular: "/movie/popular", 
//         top_rated: "/movie/top_rated",
//         upcoming: "/movie/upcoming",
//     };
// export const fetchData = (param) =>{
//     return axios.get(`${URL}${endpoints[param]}?api_key=${API_KEY}`)
// }
// api.js
// import axios from 'axios';

// const API_BASE_URL = 'https://demo.credy.in/api/v1/maya/movies/'; // Replace with your actual movie API endpoint

// const api = axios.create({
//   baseURL: API_BASE_URL,
// });

// export const login = async (username, password) => {
//   return api.post('/api/login', { username, password });
// };

// export const getMovies = async () => {
//   // Assuming you have an authenticated endpoint for fetching movies
//   const accessToken = localStorage.getItem('accessToken');
//   api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
//   return api.get('/api/movies');
// };

