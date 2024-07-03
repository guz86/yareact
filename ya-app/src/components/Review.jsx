export const Review = ({ id, author, text, raiting }) => {
  return (
    <div key={id}>
      <span>{author}</span>
      <span>{text}</span>
      <span>{raiting}</span>
    </div>
  );
};
