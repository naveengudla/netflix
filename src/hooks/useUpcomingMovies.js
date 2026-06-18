import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_KEY } from "../utils/constants";
import { setUpcomingMovies } from "../utils/movieStore";    

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((state) => state.movie.upcomingMovies);
  const getMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      TMDB_API_KEY
    );
    const data = await response.json();
    console.log("Upcoming Movies:", data.results);
    dispatch(setUpcomingMovies(data.results));
  };

  useEffect(() => {
    !upcomingMovies && getMovies();
  }, []);
};

export default useUpcomingMovies;
