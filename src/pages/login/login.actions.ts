import { Redux } from '../../types/local';
import { createActionsSet } from '../../utils/redux';

const types = {
  LOGIN: createActionsSet.api('login-page.login'),
};

const login = () => async (dispatch: Redux.Dispatch) => {
  dispatch({ type: types.LOGIN.REQUEST });
  try {
    dispatch({ type: types.LOGIN.SUCCESS });
    // history.replace(CommonPath.LOGIN_PATH);
  } catch (e) {
    dispatch({ type: types.LOGIN.FAILED, payload: e });
  }
};

export const loginActions = {
  types,
  login,
};
