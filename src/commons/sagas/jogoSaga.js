import { takeEvery, call, put } from "redux-saga/effects";
import { types } from "../../commons/actions/jogoActions";
import jogoService from "../../commons/services/jogoService";

function* getJogos() {
  try {
    const response = yield call(jogoService.buscar);
    yield put({ type: types.GET_JOGOS_SUCCESS, payload: { data: response } });
  } catch (error) {
    console.log(error);
  }
}

function* saveJogo(action) {
  try {
    yield call(jogoService.cadastrar, action.jogo);
  } catch (error) {
    console.log(error);
  }
}

export default function*() {
  yield takeEvery(types.GET_JOGOS_REQUEST, getJogos);
  yield takeEvery(types.SAVE_JOGO_REQUEST, saveJogo);
}
