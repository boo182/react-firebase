// @flow
import { action, errorAction } from '../../utils/actionUtils';
import type { List } from 'immutable';
import type { EquipmentRecord, CheckpointType } from '../../flowTypes';
import { LOAD_EQUIPMENT_DETAIL, LOAD_EQUIPMENT, LOAD_CHECKPOINT_ASSOCIATED, UPDATE_NOTE } from './constants';

export const loadEquipmentTodetail = (equipment: EquipmentRecord) => action(LOAD_EQUIPMENT_DETAIL, { equipment });
//
export const loadEquipmentRequest = (equipId: string) => action(LOAD_EQUIPMENT.request, { equipId });
export const loadEquipmentFailure = errorAction(LOAD_EQUIPMENT.failure);
//
export const loadAssociatedCheckpointsRequest = (equipId: string) => action(LOAD_CHECKPOINT_ASSOCIATED.request, { equipId });
export const loadAssociatedCheckpointsSuccess = (
  checkpoints: List<CheckpointType>
) => action(LOAD_CHECKPOINT_ASSOCIATED.success, { checkpoints });
export const loadAssociatedCheckpointFailure = errorAction(LOAD_CHECKPOINT_ASSOCIATED.failure);

export const updateNote = (note: string) => action(UPDATE_NOTE, { note });

