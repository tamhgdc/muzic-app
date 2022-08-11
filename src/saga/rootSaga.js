import { all, fork } from "redux-saga/effects";
import watchSaga from "./watchSaga";
export default function* rootSaga() {
  yield all([fork(watchSaga)]);
}
