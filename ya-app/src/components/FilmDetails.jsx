import React from "react";
import { useCount } from "../hooks/useCount";
import { FilmInfo } from "./FilmInfo";

export const FilmDetails = ({ title, genre, seasonsCount }) => {
  const { count, decrement, increment } = useCount(0);

  return (
    <div>
      <FilmInfo title={title} seasonsCount={seasonsCount} genre={genre} />
      <div>
        <button onClick={decrement}>-</button>
        {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};
