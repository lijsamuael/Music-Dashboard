import { call, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import {
  fetchTotalSongs,
  fetchTotalArtists,
  fetchTotalGenres,
  fetchTotalAlbums,
  fetchTotalSongsRequest,
  fetchTotalArtistsRequest,
  fetchTotalGenresRequest,
  fetchTotalAlbumsRequest,
  AlbumByArtist,
  setAlbumsByArtist,
  SongByArtist,
  setSongsByArtist,
  SongByGenre,
  setSongsByGenre,
  SongByAlbum,
  setSongsByAlbum,
  fetchSongsByGenre,
  fetchSongsByArtist,
  fetchSongsByAlbum,
  fetchAlbumsByArtist,
  setLoading,
  setError,
} from "../slices/statisticsSlice";

export interface TotalSongs {
  totalSongs: number;
}

export interface TotalArtists {
  totalArtists: number;
}

export interface TotalGenres {
  totalGenres: number;
}

export interface TotalAlbums {
  totalAlbums: number;
}

type SagaGenerator<T> = Generator<any, void, T>;

const API_URL = import.meta.env.VITE_APP_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

function* fetchTotalSongsSaga(): SagaGenerator<AxiosResponse<TotalSongs>> {
  try {
    console.log("fetching............. total songs");
    const response: AxiosResponse<TotalSongs> = yield call(
      axiosInstance.get,
      "/statistics/total-songs"
    );
    console.log("total songs form saga", response.data.totalSongs);
    yield put(fetchTotalSongs(response.data.totalSongs));
  } catch (error) {
    const err = error as Error;
    console.log(err.message);
  }
}

function* fetchTotalArtistsSaga(): SagaGenerator<AxiosResponse<TotalArtists>> {
  try {
    const response: AxiosResponse<TotalArtists> = yield call(
      axiosInstance.get,
      "/statistics/total-artists"
    );
    yield put(fetchTotalArtists(response.data.totalArtists));
  } catch (error) {
    const err = error as Error;
    console.log(err.message);
  }
}

function* fetchTotalGenresSaga(): SagaGenerator<AxiosResponse<TotalGenres>> {
  try {
    const response: AxiosResponse<TotalGenres> = yield call(
      axiosInstance.get,
      "/statistics/total-genres"
    );
    yield put(fetchTotalGenres(response.data.totalGenres));
  } catch (error) {
    const err = error as Error;
    console.log(err.message);
  }
}

function* fetchTotalAlbumsSaga(): SagaGenerator<AxiosResponse<TotalAlbums>> {
  try {
    const response: AxiosResponse<TotalAlbums> = yield call(
      axiosInstance.get,
      "/statistics/total-albums"
    );
    yield put(fetchTotalAlbums(response.data.totalAlbums));
  } catch (error) {
    const err = error as Error;
    console.log(err.message);
  }
}

function* fetchAlbumsByArtistSaga(): SagaGenerator<
  AxiosResponse<AlbumByArtist[]>
> {
  try {
    console.log("fetching............. songs per each artist");
    const response: AxiosResponse<AlbumByArtist[]> = yield call(
      axiosInstance.get,
      "/statistics/albums-by-artist"
    );
    console.log("total songs form saga", response.data);
    yield put(setAlbumsByArtist(response.data));
  } catch (error) {
    const err = error as Error;
    console.log(err.message);
  }
}
function* fetchSongsByArtistSaga(): SagaGenerator<
  AxiosResponse<SongByArtist[]>
> {
  try {
    const response: AxiosResponse<SongByArtist[]> = yield call(
      axiosInstance.get,
      "/statistics/songs-by-artist"
    );
    yield put(setSongsByArtist(response.data));
  } catch (error) {
    const err = error as Error;
    console.log(err.message);
  }
}
function* fetchSongsByGenreSaga(): SagaGenerator<AxiosResponse<SongByGenre[]>> {
  try {
    const response: AxiosResponse<SongByGenre[]> = yield call(
      axiosInstance.get,
      "/statistics/songs-by-genre"
    );
    yield put(setSongsByGenre(response.data));
  } catch (error) {
    const err = error as Error;
    console.log(err.message);
  }
}
function* fetchSongsByAlbumSaga(): SagaGenerator<AxiosResponse<SongByAlbum[]>> {
  try {
    yield put(setLoading(true));
    const response: AxiosResponse<SongByAlbum[]> = yield call(
      axiosInstance.get,
      "/statistics/songs-by-album"
    );
    yield put(setSongsByAlbum(response.data));
    yield put(setLoading(false));
  } catch (error) {
    const err = error as Error;
    yield put(setError(true));

    console.log(err.message);
  }
}

export function* statisticsSagas() {
  yield takeLatest(fetchTotalSongsRequest.type, fetchTotalSongsSaga);
  yield takeLatest(fetchTotalArtistsRequest.type, fetchTotalArtistsSaga);
  yield takeLatest(fetchTotalGenresRequest.type, fetchTotalGenresSaga);
  yield takeLatest(fetchTotalAlbumsRequest.type, fetchTotalAlbumsSaga);

  yield takeLatest(fetchAlbumsByArtist.type, fetchAlbumsByArtistSaga);
  yield takeLatest(fetchSongsByAlbum.type, fetchSongsByAlbumSaga);
  yield takeLatest(fetchSongsByArtist.type, fetchSongsByArtistSaga);
  yield takeLatest(fetchSongsByGenre.type, fetchSongsByGenreSaga);
}
