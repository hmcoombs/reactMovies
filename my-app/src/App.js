import React, { useEffect } from 'react';
import './App.css';



const apiKey = "";

const API_URL = `http://www.omdbapi.com/?apikey=${apiKey}&`
// const API_URL = `http://www.omdbapi.com/?t=${title}&apikey=${apiKey}&`

const App = () =>{
  
const getMoviesByName = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const movie = await response.json();

  console.log(movie);
}


useEffect(() => {
  getMoviesByName('batman');
}, [] );
}

export default App

// const getMoviesByName = async (title) => {
//   const result = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=${apiKey}&`);
//   const movie = await result.json();
//   console.log (movie);
// };

// getMoviesByName('batman');