// src/slices/songsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song } from "../../interfaces/songs";



export interface SongsState {
  songs: Song[];
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
  loading: boolean;
  error: boolean;
}

const initialState: SongsState = {
  songs: [],
  totalSongs: 0,
  totalArtists: 0,
  totalAlbums: 0,
  totalGenres: 0,
  loading: false,
  error: false,
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    fetchSongsRequest: (
      _state,
      _action: PayloadAction<{ selectedFilter: string }>
    ) => {},
    fetchSongs: (state, action: PayloadAction<Song[]>) => {
      state.songs = action.payload;
      console.log("total songs", state.totalSongs);
    },
    addSongRequest: (_state, _action: PayloadAction<Song>) => {},
    addSong: (state, action: PayloadAction<Song>) => {
      state.songs.push(action.payload);
    },
    updateSongRequest: (_state, _action: PayloadAction<Song>) => {},
    updateSong: (state, action: PayloadAction<Song>) => {
      const index = state.songs.findIndex(
        (song) => song._id === action.payload._id
      );
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
    },
    deleteSongRequest: (_state, _action: PayloadAction<string>) => {},
    deleteSong: (state, action: PayloadAction<string>) => {
      state.songs = state.songs.filter((song) => song._id !== action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
  },
});

export const {
  fetchSongsRequest,
  fetchSongs,
  addSongRequest,
  addSong,
  updateSongRequest,
  updateSong,
  deleteSongRequest,
  deleteSong,
  setError,
  setLoading,
} = songsSlice.actions;

export default songsSlice.reducer;
