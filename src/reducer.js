import { combineReducers } from 'redux';
import EquipmentsReducer from './Container/Equipments/reducer';

const rootReducer = combineReducers({
  equipments: EquipmentsReducer,
});

export default rootReducer;