// @flow
import { action, errorAction } from '../../utils/actionUtils';
import type { Map } from 'immutable';
import  {
  EQUIPMENTS_LOAD,
  TOGGLE_EQUIPMENT_SELECTED,
  TOGGLE_MULTIPLE_EQUIPMENTS,
  DETLETE_EQUIPMENTS,
  GO_TO_DETAIL_PAGE,
} from './constants';
import type { EquipmentRecord } from '../../flowTypes';

// Equipments Load
export const equipmentLoadRequest = action(EQUIPMENTS_LOAD.request);
export const equipmentLoadSuccess = (equipmentMap: Map<string, EquipmentRecord>) => action(EQUIPMENTS_LOAD.success, { equipmentMap });
export const equipmentLoadFailure = (equipmentMap: Map<string, EquipmentRecord>) => errorAction(EQUIPMENTS_LOAD.failure);
//
export const toggleSelectEquipment = (equipId: string) => action(TOGGLE_EQUIPMENT_SELECTED, { equipId });
export const toggleMultiple = (isAllEquipSelected: boolean) => action(TOGGLE_MULTIPLE_EQUIPMENTS, { isAllEquipSelected });
//
export const deleteEquipments = action(DETLETE_EQUIPMENTS);
//
export const goToDetailPage = (equipmentId: string) => action(GO_TO_DETAIL_PAGE, { equipmentId });

