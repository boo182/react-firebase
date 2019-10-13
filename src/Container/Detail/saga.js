import { put, takeEvery } from 'redux-saga/effects'
import { LOAD_EQUIPMENT, LOAD_CHECKPOINT } from './constants';
import { database } from '../../Components/Firebase/firebase';
import { loadEquipmentTodetail, loadEquipmentFailure, loadCheckpointSuccess } from './actions';
import { buildAssociatedCheckpoints } from '../../utils/builders';

function equipmentsLoader(equipId) {
  return new Promise(resolve => {
    const table = database.ref('Equipments').child(equipId);
    table.on('value', resolve);
  });
}

function checkpointApiLoader() {
  return new Promise(resolve => {
    const table = database.ref('Checkpoints');
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

export function* checkpointLoad(action) {
  try {
    const equipId = action.payload.equipId;
    const snapshot = yield checkpointApiLoader();
    const associatedCheckpoints = buildAssociatedCheckpoints(snapshot.val(), equipId);
    if (associatedCheckpoints) {
      yield put(loadCheckpointSuccess(associatedCheckpoints));
    }
  } catch(e) {
      yield put(loadEquipmentFailure(e))
  }
};


// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchDetailLoad() {
  yield takeEvery(LOAD_EQUIPMENT.request, equipmentLoad)
}

export function* watchCheckpointLoad() {
  yield takeEvery(LOAD_CHECKPOINT.request, checkpointLoad)
}
