import React from "react";
import { useSelector } from "react-redux";
import useVideoTrailer from "../hooks/useVideoTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((state) => state.movie.trailerVideo);
  useVideoTrailer(movieId);
  return (
    <div>
      <div>Video Background</div>
      {trailerVideo && (
        <iframe
          className="inset-0 w-screen h-full object-cover aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1`}
          autoPlay
          loop
          muted
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
