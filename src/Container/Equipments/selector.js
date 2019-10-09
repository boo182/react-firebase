// @flow
import { createSelector } from 'reselect';
import type { StateType, Equipments } from '../../flowTypes';
import { EMPTY_MAP } from '../../constants';

const selectEquipmentList = (state: StateType) => state.equipments || EMPTY_MAP; 
//
export const makeSelectEquipmentList = createSelector(
  selectEquipmentList,
  (equipmentList: Map<string, Equipments>): Map<string, Equipments> => equipmentList,
);

export const makeSelectMultipleSelection = createSelector(
  selectEquipmentList,
  (equipmentList: Map<string, Equipments>): boolean => equipmentList.filter(item => item.selected).size,
);

export const makeSelectFullMultipleSelection = createSelector(
  makeSelectMultipleSelection,
  selectEquipmentList,
  (selection: number, equipmentList: Map<string, Equipments>): boolean => equipmentList.size === selection,
);



