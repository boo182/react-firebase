// @flow
import { createSelector } from 'reselect';
import type { EquipmentRecord, StateType } from '../../flowTypes';
import { Equipments } from '../../utils/builders';
import { EMPTY_LIST } from '../../constants';

export const makeSelectEquipment = createSelector(
  (state: StateType): EquipmentRecord => state.detail.equipment || new Equipments(), 
  (equipment: EquipmentRecord): EquipmentRecord => equipment,
)

export const makeSelectCheckpoints = createSelector(
  (state: StateType): List<CheckpointRecord> | void => state.detail.checkpoints || EMPTY_LIST, 
  (cp: List<CheckpointRecord>): List<CheckpointRecord> => cp,
)







