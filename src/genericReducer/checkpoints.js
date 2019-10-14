// @flow
import { List } from 'immutable';
import { LOAD_CHECKPOINT } from '../genericActions/checkpointsActions';
import type { CheckpointRecord } from '../flowTypes';


// ================================================

const initialState = List();

export default (checkpoints: UiType = initialState, action: Action):  UiType => {
  switch (action.type) {
    case LOAD_CHECKPOINT.success: {
      const { cpList }: { cpList: List<CheckpointRecord> } = action.payload;
      return cpList;
    }

    default:
      return checkpoints;
  }
};
