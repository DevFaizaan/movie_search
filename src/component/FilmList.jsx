import { useNavigate } from 'react-router-dom';
import Card from './Card';

function FilmList({ data }) {
  return (
    <ul className='FilmList'>
      {data.map(({ imdbID, Title, Year, Poster }) => (
        <Card
          key={imdbID}
          id={imdbID}
          title={Title}
          year={Year}
          image={Poster}
        />
      ))}
    </ul>
  );
}

export default FilmList;
