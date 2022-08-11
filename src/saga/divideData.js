import { put } from "redux-saga/effects";
import { setListSongs } from "./controlSlice";
import { setLoading, setSongs } from "./musicSlice";

export default function* divideData(data) {
  const { songs } = data;
  console.log(songs);
  yield put(setSongs(songs));
  yield put(setListSongs(songs.top100_VN[0].songs));
  yield put(setLoading(false));
}
