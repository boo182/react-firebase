// @flow
import { createSelector } from 'reselect';
import type { StateType, Equipments } from '../../flowTypes';
import { EMPTY_MAP, EMPTY_LIST } from '../../constants';
import { sortTypeList, filterList } from '../../utils/helpers';
import { List } from '@material-ui/core';

const selectEquipmentList = (state: StateType) => state.equipments || EMPTY_MAP; 
//
export const makseSelectEquipmentSortType = createSelector(
  (state: StateType) => state.ui.equipmentList.sortType || '',
  (sortType: string): string => sortType,
);

export const makeSelectEquipmentFilter = createSelector(
  (state: StateType) => state.ui.equipmentList.filter || '',
  (filter: string): string => filter,
);

export const makeSelectEquipmentList = createSelector(
  selectEquipmentList,
  makseSelectEquipmentSortType,
  makeSelectEquipmentFilter,
  (equipmentList: Map<string, Equipments>, sortType: string, filter: string): List<Equipments> => {
    const valuesList = [...equipmentList.values()];
    const filteredList = filterList(valuesList, filter);
    return sortTypeList(filteredList, sortType) || EMPTY_LIST;
  }
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





