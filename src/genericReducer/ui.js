// @flow
import { Record } from 'immutable';
import { SORT_EQUIPMENT_LIST, FILTER_EQUIPMENT_LIST, SET_FILTER_TYPE } from '../genericActions/uiActions';
import { UiType  } from '../flowTypes';
import { NAME } from '../constants';


// ================================================
const Ui = Record({
  equipmentList: {
    sortType: NAME.value,
    filter: '',
    filterType: NAME.value,
  }
});

const initialState = new Ui();

export default (ui: UiType = initialState, action: Action):  UiType => {
  switch (action.type) {
    case SORT_EQUIPMENT_LIST: {
      const { sortType }: { sortType: string } = action.payload;
      return ui.setIn(['equipmentList', 'sortType'], sortType);
    }

    case FILTER_EQUIPMENT_LIST: {
      const { filter }: { filter: string } = action.payload;
      return ui.setIn(['equipmentList', 'filter'], filter);
    }

    case SET_FILTER_TYPE: {
      const { filterType }: { filterType: string } = action.payload;
      return ui.setIn(['equipmentList', 'filterType'], filterType);
    }

    default:
      return ui;
  }
};
