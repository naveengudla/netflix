import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_KEY } from "../utils/constants";
import { setNowPlayingMovies } from "../utils/movieStore";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((state) => state.movie.nowPlayingMovies);
  const getMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      TMDB_API_KEY
    );
    const data = await response.json();
    dispatch(setNowPlayingMovies(data.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getMovies();
  }, []);
};

export default useNowPlayingMovies;
