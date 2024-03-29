// @flow
import { Map } from 'immutable';
import  { EQUIPMENTS_LOAD, TOGGLE_EQUIPMENT_SELECTED, TOGGLE_MULTIPLE_EQUIPMENTS, DETLETE_EQUIPMENTS } from './constants';
import { EquipmentRecord  } from '../../flowTypes';


// ================================================

const initialState = Map();

export default (equipments: Map<string, EquipmentRecord> = initialState, action: Action):  Map<string, EquipmentRecord> => {
  switch (action.type) {

    case EQUIPMENTS_LOAD.success: {
      const { equipmentMap }: { equipmentMap: Map<string, EquipmentRecord> } = action.payload;
      return equipmentMap;
    }

    case TOGGLE_EQUIPMENT_SELECTED: {
      const { equipId }: { equipId: string } = action.payload;
      const isSelected = equipments.get(equipId).selected;
      return equipments.setIn([equipId, 'selected'], !isSelected);
    }

    case TOGGLE_MULTIPLE_EQUIPMENTS: {
      const { isAllEquipSelected }: { isAllEquipSelected: boolean } = action.payload;
      const list = equipments.map(item => {
        return item.set('selected',  !isAllEquipSelected)
      });
      return list;
    }

    case DETLETE_EQUIPMENTS: {
      const selectedEquipments = equipments.filter(item => !item.selected);
      return selectedEquipments;
    }

    default:
      return equipments;
  }
};
