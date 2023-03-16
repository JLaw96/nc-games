import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/navigation-bar/Nav";
import Reviews from "./components/reviews/Reviews";
import SingleReview from "./components/reviews/Single-Review";
import Comments from "./components/comments/Comments";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
        <Route path="/reviews/:review_id/comments" element={<Comments />} />
      </Routes>
    </div>
  );
}

export default App;
