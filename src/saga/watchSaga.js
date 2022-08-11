import { takeLatest } from "redux-saga/effects";
import { handleGetSongs } from "./handleGetSongs";
import { getSongs } from "./musicSlice";

export default function* watchSaga() {
  yield takeLatest(getSongs.type, handleGetSongs);
}
