import { put, takeEvery } from 'redux-saga/effects'
import { EQUIPMENTS_LOAD } from './constants';
import { database } from '../../Components/Firebase/firebase';
import { equipmentLoadSuccess, equipmentLoadFailure } from './actions';
import { equipmentListBuilder } from '../../utils/builders';


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

}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchEquipmentLoad() {
  yield takeEvery(EQUIPMENTS_LOAD.request, equipmentLoad)
}