// @flow
import { action } from '../utils/actionUtils';
//
export const SORT_EQUIPMENT_LIST = 'ui/SORT_EQUIPMENT_LIST';
export const sortEquipmentList = (sortType: string) => action(SORT_EQUIPMENT_LIST, { sortType });
