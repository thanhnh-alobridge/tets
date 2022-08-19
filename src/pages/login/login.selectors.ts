import { createSelector } from 'reselect';

import { Redux } from '../../types/local';

import { State } from './login.reducer';

const getState = (state: Redux.State): State => state.user.login;

const isLoading = createSelector(getState, (state) => state.isLoading);

const loginPageSelectors = {
  isLoading,
};

export default loginPageSelectors;
