// @flow
import { createSelector } from 'reselect';
import type { EquipmentRecord, StateType } from '../../flowTypes';
import { Equipments } from '../../utils/builders';

export const makeSelectEquipment = createSelector(
  (state: StateType): EquipmentRecord => state.detail.equipment || new Equipments(), 
  (equipment: EquipmentRecord): EquipmentRecord => equipment,
)





