// @flow
import { action } from '../utils/actionUtils';
//
export const SORT_EQUIPMENT_LIST = 'ui/SORT_EQUIPMENT_LIST';
export const sortEquipmentList = (sortType: string) => action(SORT_EQUIPMENT_LIST, { sortType });

export const FILTER_EQUIPMENT_LIST = 'ui/FILTER_EQUIPMENT_LIST';
export const filterEquipmentList = (filter: string) => action(FILTER_EQUIPMENT_LIST, { filter });
export const SET_FILTER_TYPE = 'ui/SET_FILTER_TYPE';
export const setFilterType = (filterType: string) => action(SET_FILTER_TYPE, { filterType });

