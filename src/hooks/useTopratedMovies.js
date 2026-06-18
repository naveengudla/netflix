import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_KEY } from "../utils/constants";
import { setTopRatedMovies } from "../utils/movieStore";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state) => state.movie.topRatedMovies);
  const getMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      TMDB_API_KEY
    );
    const data = await response.json();
    console.log("Top Rated Movies:", data.results);
    dispatch(setTopRatedMovies(data.results));
  };

  useEffect(() => {
    !topRatedMovies && getMovies();
  }, []);
};

export default useTopRatedMovies;