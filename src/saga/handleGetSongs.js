import { call, put } from "redux-saga/effects";
import divideData from "./divideData";
import { setLoading } from "./musicSlice";
import requestGetSongs from "./requestGetSongs";

export function* handleGetSongs() {
  // eslint-disable-next-line no-useless-rename
  yield put(setLoading(true));
  const { data } = yield call(requestGetSongs);

  yield divideData(data);
}
