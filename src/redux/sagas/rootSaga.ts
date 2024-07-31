// src/sagas/index.js (or another file where you combine sagas)

import { all } from "redux-saga/effects";
import { songsSaga } from "./songsSaga"; // Adjust the import path as needed
import { statisticsSagas } from "./statisticsSaga"; // Adjust the import path as needed

export function* rootSaga() {
  yield all([
    songsSaga(),
    statisticsSagas(),
    // Add other sagas here if needed
  ]);
}
