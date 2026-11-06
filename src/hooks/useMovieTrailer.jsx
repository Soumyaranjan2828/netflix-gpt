import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../Utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getMovieVideo();
  }, []);
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS,
    );
    const json = await data.json();
    const result = json.results.filter((ans) => ans.type == "Trailer");
    const finalTrailer = result.length ? result[0] : json.results[0];
    dispatch(addTrailerVideo(finalTrailer));
  };
};
export default useMovieTrailer;
