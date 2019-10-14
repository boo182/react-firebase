import { put, takeEvery } from 'redux-saga/effects'
import { database } from '../Components/Firebase/firebase';
import { loadCheckpointSuccess, loadCheckpointFailure, LOAD_CHECKPOINT } from '../genericActions/checkpointsActions';
import { buildCheckpointList } from '../utils/builders';


function checkpointApiLoader() {
  return new Promise(resolve => {
    const table = database.ref('Checkpoints');
    table.on('value', resolve);
  });
}

export function* checkpointLoad(action) {
  try {
    const snapshot = yield checkpointApiLoader();
    const associatedCheckpoints = buildCheckpointList(snapshot.val());
    if (associatedCheckpoints) {
      yield put(loadCheckpointSuccess(associatedCheckpoints));
    }
  } catch(e) {
      yield put(loadCheckpointFailure(e))
  }
};


export function* watchCheckpointLoad() {
  yield takeEvery(LOAD_CHECKPOINT.request, checkpointLoad)
}