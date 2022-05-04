import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from '../services/api';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { Link, useLocation } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import toast from 'react-hot-toast';

export const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const searchQuery = searchParams.get('query');

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query: evt.currentTarget.elements.query.value });
    evt.currentTarget.elements.query.value = '';
  };

  useEffect(() => {
    if (searchQuery === '') {
      return toast.error("Sorry, but you didn't enter a movie title");
    }
    if (!searchQuery) {
      return;
    }
    setLoading(true);
    fetchMovieByQuery(searchQuery)
      .then(data => {
        const {
          data: { results },
        } = data;

        if (results.length === 0) {
          return toast.error(
            'Sorry, there are no movies with that title, try again'
          );
        }

        setMovies(results);
      })
      .catch(error => {
        return toast.error('Sorry, something went wrong, try again');
      })
      .finally(setLoading(false));
  }, [searchQuery]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />

      {loading && <Loader />}

      {movies && console.log(movies)}

      {movies && (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
