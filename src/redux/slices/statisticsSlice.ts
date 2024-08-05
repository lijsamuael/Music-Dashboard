import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AlbumByArtist,
  SongByAlbum,
  SongByArtist,
  SongByGenre,
} from "../../interfaces/statistics";

export interface StatisticsState {
  songsPerArtist: SongByArtist[];
  songsPerGenre: SongByGenre[];
  songsPerAlbum: SongByAlbum[];
  albumsPerArtist: AlbumByArtist[];
  totalSongs: number;
  totalArtists: number;
  totalGenres: number;
  totalAlbums: number;
  loading: boolean;
  error: boolean;
}

const initialState: StatisticsState = {
  songsPerArtist: [],
  songsPerGenre: [],
  songsPerAlbum: [],
  albumsPerArtist: [],
  totalSongs: 0,
  totalArtists: 0,
  totalGenres: 0,
  totalAlbums: 0,
  loading: false,
  error: false,
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    fetchAlbumsByArtist: (_state) => {},
    setAlbumsByArtist: (state, action: PayloadAction<AlbumByArtist[]>) => {
      state.albumsPerArtist = action.payload;
    },
    fetchSongsByArtist: (_state) => {},
    setSongsByArtist: (state, action: PayloadAction<SongByArtist[]>) => {
      state.songsPerArtist = action.payload;
    },
    fetchSongsByGenre: (_state) => {},
    setSongsByGenre: (state, action: PayloadAction<SongByGenre[]>) => {
      state.songsPerGenre = action.payload;
    },
    fetchSongsByAlbum: (_state) => {},
    setSongsByAlbum: (state, action: PayloadAction<SongByAlbum[]>) => {
      state.songsPerAlbum = action.payload;
    },
    fetchTotalSongsRequest: (_state) => {},
    fetchTotalSongs: (state, action: PayloadAction<number>) => {
      state.totalSongs = action.payload;
    },
    fetchTotalGenresRequest: (_state) => {},
    fetchTotalGenres: (state, action: PayloadAction<number>) => {
      state.totalGenres = action.payload;
    },
    fetchTotalAlbumsRequest: (_state) => {},
    fetchTotalAlbums: (state, action: PayloadAction<number>) => {
      state.totalAlbums = action.payload;
    },
    fetchTotalArtistsRequest: (_state) => {},
    fetchTotalArtists: (state, action: PayloadAction<number>) => {
      state.totalArtists = action.payload;
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
  fetchSongsByArtist,
  setSongsByArtist,
  fetchAlbumsByArtist,
  setAlbumsByArtist,
  fetchTotalAlbums,
  fetchTotalArtists,
  fetchTotalGenres,
  fetchTotalSongs,
  fetchTotalAlbumsRequest,
  fetchTotalArtistsRequest,
  fetchTotalGenresRequest,
  fetchTotalSongsRequest,
  fetchSongsByAlbum,
  setSongsByAlbum,
  fetchSongsByGenre,
  setSongsByGenre,
  setError,
  setLoading,
} = statisticsSlice.actions;

export default statisticsSlice.reducer;
