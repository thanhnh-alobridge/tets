const types = {
  RESET_STATE: 'root.RESET_STATE',
};

const resetState = () => ({
  type: types.RESET_STATE,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  resetState,
  types,
};
