import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../utils/api's";

const Comments = () => {
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getComments(review_id).then((commentData) => {
      setComments(commentData);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (comments.length === 0) {
    return (
      <>
        <p>Currently, there are no comments for this review</p>
        <p>
          <Link to={`/reviews/${review_id}`}>
            Click here to return to the review
          </Link>
        </p>
      </>
    );
  } else {
    return (
      <main>
        <h1>Comments</h1>
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <h2>Author: {comment.author}</h2>
                <h3>Comment: {comment.body}</h3>
                <h4>Votes: {comment.votes}</h4>
              </li>
            );
          })}
          <p>
            <Link to={`/reviews/${review_id}`}>
              Click here to return to the review
            </Link>
          </p>
          <p>
            If you would like to add a comment of your own, you can do so below!
          </p>
        </ul>
      </main>
    );
  }
};

export default Comments;
