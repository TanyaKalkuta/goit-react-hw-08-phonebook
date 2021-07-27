/* eslint-disable import/no-anonymous-default-export */
const getIsAuthenticated = state => state.auth.token;

const getUserName = state => state.auth.user.name;

// const getFetchigCurrentUser = state => state.auth.isFetchigCurrentUser;

// const getCurrentToken = state => state.auth.token;

export default {
  getIsAuthenticated,
  getUserName,
  // getFetchigCurrentUser,
  // getCurrentToken,
};
