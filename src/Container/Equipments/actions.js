import { action, errorAction } from '../../utils/actionUtils';
import  { EQUIPMENTS_LOAD } from './constants';
// Equipments Load
export const equipmentLoadRequest = action(EQUIPMENTS_LOAD.request);
export const equipmentLoadSuccess = (equipmentMap) => action(EQUIPMENTS_LOAD.success, { equipmentMap });
export const equipmentLoadFailure = (equipmentMap) => errorAction(EQUIPMENTS_LOAD.failure);
