// @flow
import type { List } from 'immutable';
import { action, errorAction, makeFetchActionType } from '../utils/actionUtils';
import type { CheckpointRecord } from '../../flowTypes';
//
export const LOAD_CHECKPOINT = makeFetchActionType('detail/LOAD_CHECKPOINT');
//
export const loadCheckpointRequest = action(LOAD_CHECKPOINT.request);
export const loadCheckpointSuccess = (cpList: List<CheckpointRecord>) => action(LOAD_CHECKPOINT.success, { cpList });
export const loadCheckpointFailure = errorAction(LOAD_CHECKPOINT.failure);