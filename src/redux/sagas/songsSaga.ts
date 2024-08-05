// src/sagas/songsSaga.ts
import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import {
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
} from "../slices/songsSlice";
import { Song } from "../../interfaces/songs";

const API_URL = import.meta.env.VITE_APP_API_URL;
axios.defaults.withCredentials = true;

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// Fetch songs
function* getSongsList(
  action: PayloadAction<{ selectedFilter: string }>
): Generator<any, void, any> {
  try {
    const { selectedFilter } = action.payload;
    const response = yield call(axiosInstance.get, "/songs", {
      params: { genre: selectedFilter },
    });

    console.log("Fetched songs:", response.data.searchResult);
    yield put(fetchSongs(response.data.searchResult));
  } catch (error: any) {
    console.error("Error occurred while fetching songs:", error.message);
    yield put(setError(true));
  }
}

// Add song
function* handleAddSong(
  action: PayloadAction<Song>
): Generator<any, void, any> {
  try {
    const response = yield call(axiosInstance.post, "/songs", action.payload);
    yield put(addSong(response.data));
  } catch (error: any) {
    yield put(setError(true));
    console.error("Error occurred while adding song:", error.message);
  }
}

// Update song
function* handleUpdateSong(
  action: PayloadAction<Song>
): Generator<any, void, any> {
  try {
    const { _id, ...data } = action.payload;
    const response = yield call(axiosInstance.put, `/songs/${_id}`, data);
    yield put(updateSong(response.data));
  } catch (error: any) {
    yield put(setError(true));
    console.error("Error occurred while updating song:", error.message);
  }
}

// Delete song
function* handleDeleteSong(
  action: PayloadAction<string>
): Generator<any, void, any> {
  try {
    yield put(setLoading(true));
    yield call(axiosInstance.delete, `/songs/${action.payload}`);
    yield put(deleteSong(action.payload));
    yield put(setLoading(false));
  } catch (error: any) {
    yield put(setError(true));

    console.error("Error occurred while deleting song:", error.message);
  }
}

export function* songsSaga() {
  yield takeLatest(fetchSongsRequest.type, getSongsList);
  yield takeLatest(addSongRequest.type, handleAddSong);
  yield takeLatest(updateSongRequest.type, handleUpdateSong);
  yield takeLatest(deleteSongRequest.type, handleDeleteSong);
}
