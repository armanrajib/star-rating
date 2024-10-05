import { useState } from "react";
import StarRating from "./StarRating";

export default function App() {
  return (
    <>
      <StarRating
        color="purple"
        size={40}
        maxRating={10}
        className="test"
        defaultRating={3}
        onSetRating={() => {}}
      />
      <StarRating
        messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
        onSetRating={() => {}}
      />
      <UserReview />
    </>
  );
}

function UserReview() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div style={{ margin: "40px 20px" }}>
      <StarRating
        color="salmon"
        messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
        onSetRating={setMovieRating}
      />
      <p style={{ fontFamily: "Outfit", fontSize: "32px", margin: 0 }}>
        This movie has {movieRating === 0 ? "no" : `a ${movieRating}-star`}{" "}
        rating.
      </p>
    </div>
  );
}
