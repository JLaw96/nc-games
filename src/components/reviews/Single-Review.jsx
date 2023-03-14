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
  console.log(review, "single review");
  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <main>
        <h1>Single Review</h1>
        <ul>
          <li key={review[0].review_id}>
            <h4>Title: {review[0].title}</h4>
            <h5>Votes: {review[0].votes}</h5>
            <img src={review[0].review_img_url} alt={review.title}></img>
            <p>Designer: {review[0].designer}</p>
            <p>Owner: {review[0].owner}</p>
            <p>Category: {review[0].category}</p>
          </li>
        </ul>
      </main>
    );
  }
};

export default SingleReview;
