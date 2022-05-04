import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../services/api';
import Loader from '../Loader/Loader';
import toast from 'react-hot-toast';
import { CastImg, CastItem } from './Cast.styled';

export function Cast() {
  const [castInfo, setCastInfo] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetchMovieCredits(movieId)
      .then(data => {
        const {
          data: { cast },
        } = data;

        setCastInfo(cast);

        if (cast.length === 0) {
          return toast.error(
            "We don't have any information about the cast for this movie"
          );
        }
      })
      .catch(error => {
        return toast.error(
          "We don't have any information about the cast for this movie"
        );
      })
      .finally(setLoading(false));
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {castInfo && (
        <CastItem>
          {castInfo.map(({ cast_id, name, character, profile_path }) => (
            <li key={cast_id}>
              <div>
                <CastImg
                  src={
                    profile_path
                      ? 'https://image.tmdb.org/t/p/w500' + profile_path
                      : 'noPosterImg'
                  }
                  alt={name}
                />
              </div>
              <div>
                <p>{name}</p>
                {character && <p>Character: {character}</p>}
              </div>
            </li>
          ))}
        </CastItem>
      )}
    </>
  );
}
