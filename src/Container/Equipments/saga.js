import { put, takeEvery, select } from 'redux-saga/effects'
import { EQUIPMENTS_LOAD, GO_TO_DETAIL_PAGE } from './constants';
import { database } from '../../Components/Firebase/firebase';
import { equipmentLoadSuccess, equipmentLoadFailure } from './actions';
import { equipmentListBuilder } from '../../utils/builders';
import { loadEquipmentTodetail } from '../Detail/actions';
import { push } from 'connected-react-router';

export const getSelectedEquipment = equipmentId => state => state.equipments.get(equipmentId);
function equipmentsLoader() {
  return new Promise(resolve => {
    const table = database.ref('Equipments');
    table.on('value', resolve);
  });
}

export function* equipmentLoad() {
    try {
      const snapshot = yield equipmentsLoader();
      if (snapshot.val()) {
        const equipmentsMap = equipmentListBuilder(snapshot.val());
        yield put(equipmentLoadSuccess(equipmentsMap))
      }
    } catch(e) {
        yield put(equipmentLoadFailure(e))
    }
};

export function* changePage(action) {
  try {
    const { equipmentId } = action.payload;
    const equipmentSelected = yield select(getSelectedEquipment(equipmentId));
    yield put(loadEquipmentTodetail(equipmentSelected));
    yield put(push(`/equipment/${equipmentId}`))
  } catch(e) {
      yield put(equipmentLoadFailure(e))
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchEquipmentLoad() {
  yield takeEvery(EQUIPMENTS_LOAD.request, equipmentLoad)
}

export function* watchPageChange() {
  yield takeEvery(GO_TO_DETAIL_PAGE, changePage)
}