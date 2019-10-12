import { all } from 'redux-saga/effects'

import {
    watchEquipmentLoad,
    watchPageChange,
} from './Container/Equipments/saga';
import { watchDetailLoad } from './Container/Detail/saga';

export default function* rootSaga() {
  yield all([
    watchEquipmentLoad(),
    watchPageChange(),
    watchDetailLoad(),
  ])
}