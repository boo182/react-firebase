// @flow
import { List } from 'immutable';
import { sortBy } from 'lodash'; 
import type { EquipmentRecord } from '../flowTypes';

export const getDefaultsLabel = (nb: number): string => {
  const str = {
    0: `L'équipement n'a pas de défaut répertorié`,
    1: `L'équipement a ${nb} défaut répertorié`
  }
  return nb > 1 ? `L'équipement a ${nb} défauts répertoriés` : str[nb]
}

export const sortTypeList = (list: List<EquipmentRecord>, type: string): List<EquipmentRecord> => 
  List(sortBy(list, item => item[type]));

export const filterList = (list: List<EquipmentRecord>, filter: string): List<EquipmentRecord> =>
  filter ? list.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())) : list; 
