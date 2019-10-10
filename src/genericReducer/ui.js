// @flow
import { Record } from 'immutable';
import  {  } from './constants';
import { UiType  } from '../../flowTypes';


// ================================================
const Ui = Record({
  equipmentList: {
    sortType: 'domain',
  }
});

const initialState = new Ui();

export default (ui: UiType = initialState, action: Action):  UiType => {
  switch (action.type) {

    default:
      return ui;
  }
};
