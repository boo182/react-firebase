import { put, takeEvery, select } from 'redux-saga/effects'
import { LOAD_EQUIPMENT } from './constants';
import { database } from '../../Components/Firebase/firebase';
import { loadEquipmentTodetail, loadEquipmentFailure } from './actions';

function equipmentsLoader(equipId) {
  return new Promise(resolve => {
    const table = database.ref('Equipments').child(equipId);
    table.on('value', resolve);
  });
}

export function* equipmentLoad(action) {
    try {
      const snapshot = yield equipmentsLoader(action.payload.equipId);
      if (snapshot.val()) {
        const equipment = {
            id: action.payload.equipId,
          ...snapshot.val(),
        }
        yield put(loadEquipmentTodetail(equipment));
      }
    } catch(e) {
        yield put(loadEquipmentFailure(e))
    }
};


// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchDetailLoad() {
  yield takeEvery(LOAD_EQUIPMENT.request, equipmentLoad)
}
