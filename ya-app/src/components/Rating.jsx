import { useMemo } from "react";

export const Rating = ({ reviews }) => {
  const filmRating = useMemo(() => {
    return Math.floor(
      reviews.reduce((sum, review) => {
        return sum + review.rating;
      }, 0) / reviews.length
    );
  }, [reviews]);

  return <div>Rating: {filmRating}</div>;
};

