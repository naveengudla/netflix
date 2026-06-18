import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_KEY } from "../utils/constants";
import { setPopularMovies } from "../utils/movieStore";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movie.popularMovies);
  const getMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      TMDB_API_KEY
    );
    const data = await response.json();
    dispatch(setPopularMovies(data.results));
  };

  useEffect(() => {
    !popularMovies && getMovies();
  }, []);
};

export default usePopularMovies;
