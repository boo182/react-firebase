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
export type CheckpointType = {
  id: '',
  equipmentKey: '',
  fault: '',
  name: '',
  reco: '',
};

export type CheckpointRecord = RecordOf<Checkpoint>;

export type DetailRecord = RecordOf<{
  equipment: EquipmentRecord,
  defaults: List<CheckpointRecord>,
  recommendation: List<CheckpointRecord>,
}>;

export type StateType = {
  equipments: Map<string, EquipmentRecord>,
  detail: DetailRecord,
  ui: EquipmentListUiType,
};

