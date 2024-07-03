import "./App.css";
import { FilmDetails } from "./components/FilmDetails";
import { Reviews } from "./components/Reviews";
import { Recommendations } from "./components/Recommendations";
import { filmDetails } from "./filmDetails";
import { Rating } from "./components/Rating";
import { NewReviewForm } from "./components/NewReviewForm";

function App() {
  return (
    <div>
      <header />
      <FilmDetails
        title={filmDetails.title}
        seasonsCount={filmDetails.seasonsCount}
        genre={filmDetails.genre}
      />
      <Rating reviews={filmDetails.reviews} />
      <Reviews reviews={filmDetails.reviews} />
      <NewReviewForm />
      <Recommendations />

      <footer />
    </div>
  );
}

export default App;
