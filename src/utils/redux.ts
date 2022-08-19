import { Reducer } from 'redux';

import { Redux } from '../types/local';

const createApiActionsSet = (prefix: string): Redux.ApiActionSet => ({
  REQUEST: `${prefix}.REQUEST`,
  SUCCESS: `${prefix}.SUCCESS`,
  FAILED: `${prefix}.FAILED`,
});

export const createActionsSet = {
  api: createApiActionsSet,
};

export const createResetableReducer = <T>(reducer: Reducer<T, any>, ...resetActionTypes: string[]): Reducer<T, any> => {
  const initialState = reducer(undefined, {});

  const resetableReducer = (state: T, action: any) => {
    if (resetActionTypes.includes(action.type)) {
      return initialState;
    }

    return reducer(state, action);
  };

  return resetableReducer as Reducer<T, any>;
};
