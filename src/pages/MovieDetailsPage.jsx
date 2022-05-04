import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { fetchMovieById } from '../services/api';
import Loader from '../components/Loader/Loader';
import toast from 'react-hot-toast';
import { BsArrowLeftShort } from 'react-icons/bs';
import {
  GoBackButton,
  MovieImg,
  MovieDetails,
  MovieTitle,
  MovieOverview,
  AdditionalInformation,
} from './MovieDetalisPage.styled';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const path = useRef(location);

  useEffect(() => {
    setLoading(true);
    fetchMovieById(movieId)
      .then(data => {
        const {
          data: { poster_path, title, name, overview, vote_average, genres },
        } = data;

        setMovie({
          poster: poster_path
            ? 'https://image.tmdb.org/t/p/w500' + poster_path
            : 'There is no img',
          title,
          name,
          overview: overview ? overview : 'There is no overview',
          vote_average,
          genresValues:
            genres.length === 0
              ? 'Unknown genre'
              : genres.map(({ name }) => [name]).join(', '),
        });
      })
      .catch(error => {
        return toast.error('Sorry, something went wrong, try again');
      })

      .finally(setLoading(false));
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      <GoBackButton type="button">
        <Link
          to={path.current?.state?.from ?? `/`}
          state={{ from: path.current }}
        >
          <BsArrowLeftShort />
          Go back
        </Link>
      </GoBackButton>
      {movie && (
        <MovieDetails>
          <div>
            <MovieImg
              src={movie.poster}
              alt={movie.title ? movie.title : movie.name}
            />
          </div>
          <div>
            <MovieTitle>{movie.title ? movie.title : movie.name}</MovieTitle>
            <p>User Score: {movie.vote_average * 10}%</p>
            <MovieOverview>Overview</MovieOverview>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genresValues}</p>
          </div>
        </MovieDetails>
      )}

      <AdditionalInformation>
        <p>Additional information</p>

        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </AdditionalInformation>
      <Outlet />
    </>
  );
};
export default MovieDetailsPage;
