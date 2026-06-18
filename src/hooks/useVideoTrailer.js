import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_KEY } from "../utils/constants";
import { setTrailerVideo } from "../utils/movieStore";

const useVideoTrailer = (id) => {
  const dispatch = useDispatch();
  const videoTrailer = useSelector((state) => state.movie.videoTrailer);
  const getVideoTrailer = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      TMDB_API_KEY
    );
    const data = await response.json();
    const filteredData = data.results.filter((video) => video.type === "Trailer");
    const trailer = filteredData.length > 0 ? filteredData[0] : data.results[0];
    dispatch(setTrailerVideo(trailer));
  };

  useEffect(() => {
    !videoTrailer && getVideoTrailer();
  }, []);
};

export default useVideoTrailer;
