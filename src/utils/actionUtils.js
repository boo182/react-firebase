// @flow
import type { Action, FailureAction, ActionFailurePayload } from '../flowTypes';

export function action<T>(type: string, payload: T): Action<T> {
  return {
    type,
    payload,
  };
}

export const errorAction = (type: string) => (error: ActionFailurePayload): FailureAction => action(type, { error });

export const makeFetchActionType = (baseName: string) => ({
  request: `${baseName}_REQUEST`,
  success: `${baseName}_SUCCESS`,
  failure: `${baseName}_FAILURE`,
});

export const genericError: Action = errorAction('GENERIC_FAILURE');
