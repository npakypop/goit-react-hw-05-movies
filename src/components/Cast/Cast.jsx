import { getMovieCast } from 'services/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'


export const Cast = () => {
    const { movieId } = useParams();
    const [actors, setActors] = useState([]);
    
  useEffect(() => {
      getMovieCast(movieId).then(setActors).catch(error=>console.log(error))
  }, [movieId]);
    
  return (
    <>
      <h3>Actor team</h3>
      <ul>
        {actors.map(({ profile_path, id, name }) => (
          <li key={id}>
           {profile_path && <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
              width={200}
            />}
            <h4>{name}</h4>
          </li>
        ))}
      </ul>
    </>
  );
};
