import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrandingMovies } from 'services/api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrandingMovies().then(data => {
      const {
        data: { results },
      } = data;
      setMovies(results);
    });
  }, []);

  return (
    <>
      <h2>Tranding today </h2>
      {movies && (
        <ul>
          {movies.map(({ id, title, name, poster_path }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <p>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default HomePage;
