// @flow
import type { Map, RecordOf } from 'immutable';

export type Equipment = {
  id?: string,
  name: string,
  building: string,
  domain: string,
  niveau: string,
  local: string,
  photo: string,
  brand: string,
  model: string,
  serialNumber: string,
  quantity: number,
  status: string,
  notes: string,
  nbFaults: string,
}
export type EquipmentRecord = RecordOf<Equipment>;
export type EquipmentListUiType = RecordOf<{
  equimentList: {
    sortType: string,
    filter: string,
    filterType: string,
  }
}>

export type StateType = {
    equipments: Map<string, EquipmentRecord>,
    ui: EquipmentListUiType,
};