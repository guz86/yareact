import { Review } from "./Review";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      {!!reviews?.length &&
        reviews.map((review) => (
          <Review
            key={review.id}
            author={review.author}
            text={review.text}
            raiting={review.raiting}
          />
        ))}
    </div>
  );
};
