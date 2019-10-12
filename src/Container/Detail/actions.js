// @flow
import { action, errorAction } from '../../utils/actionUtils';
import type { EquipmentRecord } from '../../flowTypes';
import { LOAD_EQUIPMENT_DETAIL, LOAD_EQUIPMENT } from './constants';

export const loadEquipmentTodetail = (equipment: EquipmentRecord) => action(LOAD_EQUIPMENT_DETAIL, { equipment });
//
export const loadEquipmentRequest = (equipId: string) => action(LOAD_EQUIPMENT.request, { equipId });
export const loadEquipmentFailure = errorAction(LOAD_EQUIPMENT.failure);
