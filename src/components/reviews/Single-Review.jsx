import "./Single-Review.css";
import { useState, useEffect } from "react";
import { getReviewById } from "../utils/api's";
import { useParams } from "react-router-dom";

const SingleReview = () => {
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getReviewById(review_id).then((reviewData) => {
      setReview(reviewData);
      setIsLoading(false);
    });
  }, [review_id]);
  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <main>
        <h1>Single Review</h1>
        <ul>
          <li key={review.review_id}>
            <h4>Title: {review.title}</h4>
            <p>Review: {review.review_body}</p>
            <h5>Votes: {review.votes}</h5>
            <img src={review.review_img_url} alt={review.title}></img>
            <p>Designer: {review.designer}</p>
            <p>Owner: {review.owner}</p>
            <p>Category: {review.category}</p>
          </li>
        </ul>
      </main>
    );
  }
};

export default SingleReview;
