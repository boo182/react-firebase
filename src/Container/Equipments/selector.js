// @flow
import { createSelector } from 'reselect';
import type { StateType, Equipments } from '../../flowTypes';
import { EMPTY_MAP } from '../../constants';

const selectEquipmentList = (state: StateType) => state.equipments || EMPTY_MAP; 
//
export const makeSelectEquipments = createSelector(
  selectEquipmentList,
  (equipmentList: Map<string, Equipments>): Map<string, Equipments> => equipmentList,
);


