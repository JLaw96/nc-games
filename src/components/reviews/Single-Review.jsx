import "./Single-Review.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getReviewById,
  voteUpOnReview,
  voteDownOnReview,
} from "../utils/api's";
import { useParams } from "react-router-dom";

const SingleReview = () => {
  const [userVote, setUserVote] = useState(0);
  const [isVotingErr, setIsVotingErr] = useState(false);
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

  console.log(review, "review in the single review file");
  const onClickUp = () => {
    setIsVotingErr(false);
    setUserVote(1);
    setReview((currentReviews) => {
      return { ...currentReviews, votes: currentReviews.votes + 1 };
    });
    voteUpOnReview(review_id).catch(() => {
      setReview((currentReviews) => {
        return { ...currentReviews, votes: currentReviews.votes - 1 };
      });
      setUserVote(0);
      setIsVotingErr(true);
    });
  };

  const onClickDown = () => {
    setIsVotingErr(false);
    setUserVote(-1);
    setReview((currentReviews) => {
      return { ...currentReviews, votes: currentReviews.votes - 1 };
    });
    voteDownOnReview(review_id).catch(() => {
      setReview((currentReviews) => {
        return { ...currentReviews, votes: currentReviews.votes + 1 };
      });
      setUserVote(0);
      setIsVotingErr(true);
    });
  };

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
            <p>{""}</p>
            <button onClick={onClickUp} disabled={userVote !== 0}>
              👍
            </button>
            <button onClick={onClickDown} disabled={userVote !== 0}>
              👎
            </button>
            {isVotingErr && <p>That vote was not successful</p>}
            <p>Designer: {review.designer}</p>
            <p>Owner: {review.owner}</p>
            <p>Category: {review.category}</p>
            <p>
              <Link to={`/reviews/${review.review_id}/comments`}>
                Click here to see comments related to this review
              </Link>
            </p>
          </li>
        </ul>
      </main>
    );
  }
};

export default SingleReview;
