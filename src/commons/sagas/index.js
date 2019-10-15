import { all } from "redux-saga/effects";

import jogoSaga from "./jogoSaga";

export default function* rootSaga() {
  yield all([jogoSaga()]);
}
