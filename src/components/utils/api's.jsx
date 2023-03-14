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
  let path = `/reviews`;
  return gamesApi
    .get(path, {
      params: {
        review_id: review_id,
        limit: 15,
      },
    })
    .then(({ data }) => {
      return data.reviews;
    });
};
