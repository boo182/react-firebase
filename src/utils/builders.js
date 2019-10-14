// @flow
import { Map, Record, List } from 'immutable';
import { CheckpointRecord, EquipmentsType, CheckpointType } from '../flowTypes';

export const Checkpoint: CheckpointRecord = new Record({
  id: '',
  equipmentKey: '',
  fault: '',
  name: '',
  recommandation: '',
});

export const Equipments: EquipmentsType = new Record({
  id: '',
  name: '',
  building: '',
  domain: '',
  niveau: undefined,
  local: '',
  photo: '',
  brand: '',
  model: '',
  serialNumber: '',
  quantity: 0,
  status: '',
  notes: '',
  nbFaults: '',
  selected: false,
});

export const equipmentListBuilder = (equipments: { [string]: Equipment }): Map<string, EquipmentRecord> => {
  let tmp = {};
  for(const i in equipments) {
    const eq = new Equipments({ ...equipments[i], id: i });
    tmp = {...tmp, [i]: eq };
  }
  return Map(tmp);
}

export const buildCheckpointList = (checkPointObject: { [string]: CheckpointType }): List<CheckpointRecord> => {
  let tmp = [];
  for(const i in checkPointObject) {
    const cp = new Checkpoint({ ...checkPointObject[i], id: i });
    tmp = [...tmp, cp];
  }
  return List(tmp);
}

export const buildAssociatedCheckpoints = (
  checkPointObject: List<CheckpointRecord>,
  equipId: string,
  ): List<CheckpointRecord> => checkPointObject.filter(item => item.equipmentKey === equipId);

