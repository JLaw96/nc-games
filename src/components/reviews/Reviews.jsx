import "./Reviews.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviews } from "../utils/api's";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <main>
        <h1>Reviews</h1>
        <ul>
          {reviews.map((review) => {
            return (
              <li key={review.review_id}>
                <h2>Title: {review.title}</h2>
                <h3>Votes: {review.votes}</h3>
                <img src={review.review_img_url} alt={review.title}></img>
                <p>
                  <Link to={`/reviews/${review.review_id}`}>
                    Click here to see more about this review!
                  </Link>
                </p>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
};

export default Reviews;
