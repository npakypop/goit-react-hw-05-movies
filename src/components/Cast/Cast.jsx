import { getMovieCast } from 'services/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { List, Actor } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    getMovieCast(movieId)
      .then(setActors)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      <h3>Actor team</h3>
      <List>
        {actors.map(({ profile_path, id, name }) => (
          <Actor key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
              />
            ) : (
              <img src="../img/img.png" alt={name} />
            )}
            <h4>{name}</h4>
          </Actor>
        ))}
      </List>
    </>
  );
};
export default Cast;
