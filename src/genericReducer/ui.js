// @flow
import { Record } from 'immutable';
import { SORT_EQUIPMENT_LIST, FILTER_EQUIPMENT_LIST } from '../genericActions/uiActions';
import { UiType  } from '../flowTypes';


// ================================================
const Ui = Record({
  equipmentList: {
    sortType: 'name',
    filter: '',
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
    default:
      return ui;
  }
};
