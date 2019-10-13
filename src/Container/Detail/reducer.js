// @flow
import { Record } from 'immutable';
import { Equipments } from '../../utils/builders';
import { LOAD_EQUIPMENT_DETAIL, LOAD_CHECKPOINT, UPDATE_NOTE } from './constants';
import type { DetailRecord, EquipmentRecord } from '../../flowTypes';
import { EMPTY_LIST } from '../../constants';


// ================================================
const EquipmentDetail = new Record({
  equipment: new Equipments(),
  checkpoints: EMPTY_LIST,
});
const initialState = new EquipmentDetail();

export default (detail: DetailRecord = initialState, action: Action):  Detail => {
  switch (action.type) {

    case LOAD_EQUIPMENT_DETAIL: {
      const { equipment }: { equipment: EquipmentRecord } = action.payload;
      return detail.set('equipment', equipment);
    }
    case LOAD_CHECKPOINT.success: {
      const { checkpoints } = action.payload;
      return detail.set('checkpoints', checkpoints);
    }

    case UPDATE_NOTE: {
      const { note }: { note: string } = action.payload;
      return detail.setIn(['equipment', 'notes'], note);
    }
    default:
      return detail;
  }
};
