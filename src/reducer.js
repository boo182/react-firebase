import { combineReducers } from 'redux';
import EquipmentsReducer from './Container/Equipments/reducer';
import UiReducer from './genericReducer/ui';

const rootReducer = combineReducers({
  equipments: EquipmentsReducer,
  ui: UiReducer,
});

export default rootReducer;