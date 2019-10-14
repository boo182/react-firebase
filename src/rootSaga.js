import { all } from 'redux-saga/effects'

import {
    watchEquipmentLoad,
    watchPageChange,
} from './Container/Equipments/saga';
import {
  watchDetailLoad,
  watchAssociatedCheckpointLoad,
} from './Container/Detail/saga';
import { watchCheckpointLoad } from './genericSagas/checkpointsSaga';

export default function* rootSaga() {
  yield all([
    watchEquipmentLoad(),
    watchPageChange(),
    watchDetailLoad(),
    watchCheckpointLoad(),
    watchAssociatedCheckpointLoad()
  ])
}