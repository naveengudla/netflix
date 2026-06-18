import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const TrailerContainer = () => {
  const movies = useSelector((state) => state.movie.nowPlayingMovies);

  if (!movies?.length) return;

  const trailerMovie = movies[0];

  const { original_title, overview, id } = trailerMovie;

  return (
    <div>
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default TrailerContainer;
