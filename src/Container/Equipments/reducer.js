// @flow
import { Map } from 'immutable';
import  { EQUIPMENTS_LOAD } from './constants';


// ================================================

const initialState = Map();

export default (equipments: Map<string, Equipments> = initialState, action: Action): Equipments => {
  switch (action.type) {

    case EQUIPMENTS_LOAD.success: {
      const { equipmentMap } = action.payload;
      console.log(equipmentMap);
      return equipmentMap;
    }

    default:
      return equipments;
  }
};
