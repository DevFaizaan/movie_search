import { useState, useEffect } from 'react';
import axios from 'axios';

const FilmReq = () => {
  const [data, setData] = useState('');
  const [filmTitle, setFilmTitle] = useState('');

  const updateTitle = (e) => {
    e.preventDefault();
    setFilmTitle(e.target.value);
  };

  const makeRequest = (e) => {
    axios
      .get('http://www.omdbapi.com/?apikey=24248959&t=' + filmTitle)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  };

  return (
    <>
      <div>
        <h2>FilmRequest.js</h2>
        <p>Enter the name of the film you are searching for here</p>
        <input type='text' onChange={(e) => updateTitle(e)} />
        <button onClick={(e) => makeRequest(e)}>Search Moive</button>

        <h4>Title: {data.Title}</h4>
        <h4>Year Released: {data.Year}</h4>
        <h4>Rating: {data.Rated}</h4>
        <h4>Genre: {data.Genre}</h4>
        <h4>Plot: {data.Plot}</h4>
        <h4>Runtime: {data.Runtime}</h4>
        <img src={data.Poster} alt='The poster'></img>
      </div>
    </>
  );
};

export default FilmReq;
