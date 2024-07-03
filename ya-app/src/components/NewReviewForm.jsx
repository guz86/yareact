import { useCallback, useReducer } from "react";
import './NewReviewForm.css'

const FORM_ACTIONS = {
  setName: "setName",
  setText: "setText",
  setRating: "setRating",
};

const reducer = (state, action) => {
  switch (action?.type) {
    case FORM_ACTIONS.setName:
      return { name: action.payload.name, text: "", rating: 0 };
    case FORM_ACTIONS.setText:
      return { ...state, text: action.payload.text };
    case FORM_ACTIONS.setRating:
      return { ...state, rating: action.payload.rating };
    default:
      return state;
  }
};

const initialState = {
  name: "John",
  text: "bla bla bla",
  rating: 10,
};

export const NewReviewForm = () => {
  const setFocus = useCallback((element) => {
    element.focus();
  }, []);
  const [state, dispatch] = useReducer(reducer, initialState);
  const onNameChange = (event) =>
    dispatch({
      type: FORM_ACTIONS.setName,
      payload: { name: event.target.value },
    });

  //   useEffect(() => {
  //     if (ref.current) ref.current.focus();

  //     return () => {};
  //   }, []);

  return (
    <div className="review">
      <label>
        Name:{" "}
        <input
          ref={setFocus}
          value={state.name}
          onChange={onNameChange}
          type="text"
        />
      </label>
      <label>
        Text: <input type="text" />
      </label>
      <label>
        Raiting: <input type="number" />
      </label>
    </div>
  );
};
