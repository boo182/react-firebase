// @flow
import { Map, Record } from 'immutable';
import { uniq } from 'lodash';

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

