import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCHING_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCHING_FAILS":
      return {
        loading: false,
        post: {},
        error: "Somethign went wrong",
      };
    default:
      return state;
  }
};

const DataFetching = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) =>
        dispatch({ type: "FETCHING_SUCCESS", payload: response.data })
      )
      .catch((err) => dispatch({ type: "FETCHING_FAILS" }));
  }, []);

  return (
    <div>
      {count.loading ? "Loading" : count.post.title}
      {count.error ? count.error : null}
    </div>
  );
};

export default DataFetching;
