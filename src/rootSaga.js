import { all } from 'redux-saga/effects'

import {
    watchEquipmentLoad,
    equipmentLoad
} from './Container/Equipments/saga';

export default function* rootSaga() {
  yield all([
    equipmentLoad(),
    watchEquipmentLoad()
  ])
}