import { all } from "redux-saga/effects";

import jogoSaga from "./jogoSaga";
import produtoraSaga from "./produtoraSaga";

export default function* rootSaga() {
  yield all([jogoSaga(), produtoraSaga()]);
}
