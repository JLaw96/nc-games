import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://jlaws-nc-games.onrender.com/api",
});

const getReviews = () => {
  return gamesApi.get("/reviews").then(({ data }) => {
    return data.reviews;
  });
};

export default getReviews;
