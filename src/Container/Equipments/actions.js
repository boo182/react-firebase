// @flow
import { action, errorAction } from '../../utils/actionUtils';
import  { EQUIPMENTS_LOAD, TOGGLE_EQUIPMENT_SELECTED, TOGGLE_MULTIPLE_EQUIPMENTS } from './constants';
// Equipments Load
export const equipmentLoadRequest = action(EQUIPMENTS_LOAD.request);
export const equipmentLoadSuccess = (equipmentMap: Map<string, EquipmentRecord>) => action(EQUIPMENTS_LOAD.success, { equipmentMap });
export const equipmentLoadFailure = (equipmentMap: Map<string, EquipmentRecord>) => errorAction(EQUIPMENTS_LOAD.failure);
//
export const toggleSelectEquipment =  (equipId: string) => action(TOGGLE_EQUIPMENT_SELECTED, { equipId });
export const toggleMultiple = (isAllEquipSelected: boolean) => action(TOGGLE_MULTIPLE_EQUIPMENTS, { isAllEquipSelected });
