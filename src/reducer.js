import { combineReducers } from 'redux';
import EquipmentsReducer from './Container/Equipments/reducer';
import UiReducer from './genericReducer/ui';
import DetailReducer from './Container/Detail/reducer';
import { connectRouter } from 'connected-react-router'


const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  equipments: EquipmentsReducer,
  detail: DetailReducer,
  ui: UiReducer,
});

export default rootReducer;