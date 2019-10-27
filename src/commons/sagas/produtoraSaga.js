import { takeEvery, call, put } from "redux-saga/effects";
import { types } from "../actions/produtoraActions";
import produtoraService from "../../commons/services/produtoraService";

function* getProdutoras() {
  try {
    const response = yield call(produtoraService.buscar);
    yield put({
      type: types.GET_PRODUTORAS_SUCCESS,
      payload: { data: response }
    });
  } catch (error) {
    console.log(error);
  }
}

function* saveProdutoras(action) {
  try {
    yield call(produtoraService.cadastrar, action.produtora);
  } catch (error) {
    console.log(error);
  }
}

export default function*() {
  yield takeEvery(types.GET_PRODUTORAS_REQUEST, getProdutoras);
  yield takeEvery(types.SAVE_PRODUTORA_REQUEST, saveProdutoras);
}
