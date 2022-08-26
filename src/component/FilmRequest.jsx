import { useState, useEffect } from 'react';
import axios from 'axios';
import FilmList from './FilmList';

const FilmReq = () => {
  const [data, setData] = useState([]);
  const [filmTitle, setFilmTitle] = useState('');

  const updateTitle = (e) => {
    e.preventDefault();
    setFilmTitle(e.target.value);
  };

  const makeRequest = async () => {
    try {
      const res = await axios.get(
        `http://www.omdbapi.com/?apikey=24248959&s=${filmTitle}`
      );
      setData(res.data.Search);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <h2 className='RequestHeader'>Film Request</h2>
        <input
          className='RequestInput'
          type='text'
          placeholder='Search movie title here...'
          onChange={(e) => updateTitle(e)}
        />
        <button
          className='RequestBtn'
          type='button'
          onClick={() => makeRequest()}
        >
          Search
        </button>
        {data.length === 0 ? (
          <p>Search for your favourite movies</p>
        ) : (
          <FilmList data={data} />
        )}
      </div>
    </>
  );
};

export default FilmReq;
