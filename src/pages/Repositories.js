/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer, useEffect } from "react";
import Repository from "../components/Repository.js";
import moment from "moment";

import debounce from "lodash/debounce";

const endpoint =
  "https://api.github.com/search/repositories?sort=stars&order=desc";

function reducer(state, action) {
  switch (action.type) {
    case "INCPAGE":
      return { ...state, page: state.page + 1 };
    case "APPEND_DATA":
      return {
        ...state,
        repos: state.repos.concat(action.payload)
      };
    case "ERROR":
      return { ...state, error: action.payload };
    default:
      throw new Error("Action not defined!");
  }
}

const Repositories = () => {
  const initialState = { repos: [], page: 1, error: null };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { repos, page, error } = state;

  let prior30days = moment(moment().subtract(30, "days")).format("YYYY-MM-DD");
  useEffect(() => {
    let url = encodeURI(`${endpoint}&page=${page}&q=created:>${prior30days}`);
    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log("API CALLED");
        dispatch({ type: "APPEND_DATA", payload: response.items });
      })
      .catch(error => dispatch({ type: "ERROR", payload: error }));
  }, [page]);

  //Attach a scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // debounce the handle scroll function to optimize perfs
  // and reduce api calls
  const handleScroll = debounce(() => {
    let container = document.querySelector("body");
    let windowHeight = window.innerHeight;
    let currentScrollY = window.scrollY;
    let containerHeight = container.scrollHeight;

    let percentage = Math.round(
      ((currentScrollY + windowHeight) * 100) / containerHeight
    );

    if (percentage > 90) dispatch({ type: "INCPAGE" });
  }, 200);

  return error ? (
    <p>{error.message}</p>
  ) : (
    repos.map(repo => (repo ? <Repository repo={repo} key={repo.id} /> : null))
  );
};

export default Repositories;
