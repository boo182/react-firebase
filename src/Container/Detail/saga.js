import { put, takeEvery, select } from 'redux-saga/effects'
import { LOAD_EQUIPMENT, LOAD_CHECKPOINT_ASSOCIATED } from './constants';
import { database } from '../../Components/Firebase/firebase';
import { 
  loadAssociatedCheckpointsSuccess,
  loadEquipmentTodetail,
  loadEquipmentFailure
} from './actions';
import { buildAssociatedCheckpoints } from '../../utils/builders';
import { loadCheckpointRequest } from '../../genericActions/checkpointsActions';

function equipmentsLoader(equipId) {
  return new Promise(resolve => {
    const table = database.ref('Equipments').child(equipId);
    table.on('value', resolve);
  });
}
const getAssociatedCheckpoints = state => state.checkpoints;


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
    const checkpointsSelect = yield select(getAssociatedCheckpoints);
    if(!checkpointsSelect) {
      yield loadCheckpointRequest();
      return undefined;
    }
    const associatedCheckpoints = buildAssociatedCheckpoints(checkpointsSelect, equipId);
    if (associatedCheckpoints) {
      yield put(loadAssociatedCheckpointsSuccess(associatedCheckpoints));
    }
  } catch(e) {
      yield put(loadEquipmentFailure(e))
  }
};


// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchDetailLoad() {
  yield takeEvery(LOAD_EQUIPMENT.request, equipmentLoad)
}

export function* watchAssociatedCheckpointLoad() {
  yield takeEvery(LOAD_CHECKPOINT_ASSOCIATED.request, checkpointLoad)
}
