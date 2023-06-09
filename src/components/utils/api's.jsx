import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://jlaws-nc-games.onrender.com/api",
});

export const getReviews = () => {
  return gamesApi.get("/reviews").then(({ data }) => {
    return data.reviews;
  });
};

export const getReviewById = (review_id) => {
  let path = `/reviews/${review_id}`;
  return gamesApi.get(path).then(({ data }) => {
    return data.reviews;
  });
};

export const getComments = (review_id) => {
  let path = `/reviews/${review_id}/comments`;
  return gamesApi.get(path).then(({ data }) => {
    return data.comments;
  });
};

export const voteUpOnReview = (review_id) => {
  let path = `/reviews/${review_id}`;
  return gamesApi
    .patch(path, {
      inc_votes: 1,
    })
    .then(({ data }) => {
      return data.comments;
    });
};

export const voteDownOnReview = (review_id) => {
  let path = `/reviews/${review_id}`;
  return gamesApi
    .patch(path, {
      inc_votes: -1,
    })
    .then(({ data }) => {
      return data.comments;
    });
};
