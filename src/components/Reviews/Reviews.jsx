import { getMovieReview } from 'services/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'


export const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    
  useEffect(() => {
      getMovieReview(movieId).then(setReviews).catch(error=>console.log(error))
  }, [movieId]);
    
  return (
    <>
      <h3>Reviews</h3>
      <ul>
        {reviews.length > 0 ? reviews.map(({ author, id, content }) => (
          <li key={id}>           
                <h4>{author}</h4>
                <p>{ content}</p>
          </li>
        )) : "Sorry we have no reviews for this film"}
      </ul>
    </>
  );
};