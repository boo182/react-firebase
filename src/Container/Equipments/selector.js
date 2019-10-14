// @flow
import { createSelector } from 'reselect';
import type { StateType, Equipments, EquipmentListUiType } from '../../flowTypes';
import { EMPTY_MAP, EMPTY_LIST } from '../../constants';
import { sortTypeList, filterList } from '../../utils/helpers';
import { List } from '@material-ui/core';

const selectEquipmentList = (state: StateType) => state.equipments || EMPTY_MAP;
const selectEquipmentListUi = (state: StateType) => state.ui.equipmentList || {};
//
export const makseSelectEquipmentSortType = createSelector(
  selectEquipmentListUi,
  (ui: EquipmentListUiType): string => ui.sortType,
);

export const makeSelectEquipmentFilter = createSelector(
  selectEquipmentListUi,
  (ui: EquipmentListUiType): Object => ({ filter: ui.filter, filterType: ui.filterType }),
);


export const makeSelectEquipmentList = createSelector(
  selectEquipmentList,
  makseSelectEquipmentSortType,
  makeSelectEquipmentFilter,
  (equipmentList: Map<string, Equipments>, sortType: string, { filter, filterType }: Object): List<Equipments> => {
    const valuesList = [...equipmentList.values()];
    const filteredList = filterList(valuesList, filter, filterType);
    return sortTypeList(filteredList, sortType) || EMPTY_LIST;
  }
);

export const makeSelectMultipleSelection = createSelector(
  selectEquipmentList,
  (equipmentList: Map<string, Equipments>): number => equipmentList.filter(item => item.selected).size,
);

export const makeSelectFullMultipleSelection = createSelector(
  makeSelectMultipleSelection,
  selectEquipmentList,
  (selection: number, equipmentList: Map<string, Equipments>): boolean =>
    equipmentList.size > 0 && equipmentList.size === selection,
);

export const makeSelectEquipmentsLoaded = createSelector(
  (state: StateType) => state.equipments || EMPTY_MAP,
  (equipmentList: Map<string, Equipments>): boolean => equipmentList.size > 0,
);





