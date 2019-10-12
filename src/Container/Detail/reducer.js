// @flow
import { Map, Record } from 'immutable';
import { Equipments } from '../../utils/builders';
import { LOAD_EQUIPMENT_DETAIL } from './constants';
import type { Detail, EquipmentRecord } from '../../flowTypes';


// ================================================
const EquipmentDetail = new Record({
  equipment: new Equipments(),
  numberOfEquip: 0,
});
const initialState = new EquipmentDetail();

export default (detail: Detail = initialState, action: Action):  Detail => {
  switch (action.type) {

    case LOAD_EQUIPMENT_DETAIL: {
      const { equipment }: { equipment: EquipmentRecord } = action.payload;
      return detail.set('equipment', equipment);
    }
    default:
      return detail;
  }
};
