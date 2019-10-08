import { all } from 'redux-saga/effects'

import {
    watchEquipmentLoad
} from './Container/Equipments/saga';

export default function* rootSaga() {
  yield all([
    watchEquipmentLoad()
  ])
}