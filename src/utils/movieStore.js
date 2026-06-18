import { createSlice } from "@reduxjs/toolkit";

export const movieStore = createSlice({
    name : "movieStore",
    initialState : {
        nowPlayingMovies : null,
        popularMovies : null,
        topRatedMovies : null,
        upcomingMovies : null,
        trailerVideo : null,
    },
    reducers : {
        setNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        setPopularMovies : (state, action) => {
            state.popularMovies = action.payload;
        },
        setTopRatedMovies : (state, action) => {
            state.topRatedMovies = action.payload;
        },
        setUpcomingMovies : (state, action) => {
            state.upcomingMovies = action.payload;
        },
        setTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
})

export const { setNowPlayingMovies, setPopularMovies, setTopRatedMovies, setUpcomingMovies, setTrailerVideo } = movieStore.actions;
export default movieStore.reducer;