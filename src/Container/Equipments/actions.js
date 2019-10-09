import { action, errorAction } from '../../utils/actionUtils';
import  { EQUIPMENTS_LOAD, TOGGLE_EQUIPMENT_SELECTED } from './constants';
// Equipments Load
export const equipmentLoadRequest = action(EQUIPMENTS_LOAD.request);
export const equipmentLoadSuccess = (equipmentMap: Map<string, EquipmentRecord>) => action(EQUIPMENTS_LOAD.success, { equipmentMap });
export const equipmentLoadFailure = (equipmentMap: Map<string, EquipmentRecord>) => errorAction(EQUIPMENTS_LOAD.failure);
//
export const toggleSelectEquipment =  (equipId: string) => action(TOGGLE_EQUIPMENT_SELECTED, { equipId }); 
