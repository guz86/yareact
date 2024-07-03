export const FilmInfo = ({ title, genre, seasonsCount }) => {
  return (
    <>
      <p>{title || "Unknown"}</p>
      {Boolean(genre) && <p>{genre}</p>}
      <p>{seasonsCount > 0 ? `count ${seasonsCount}` : "none"}</p>
    </>
  );
};
