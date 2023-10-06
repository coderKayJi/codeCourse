const initialState = {
  currentUser: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "LOGOUT":
      window.localStorage.clear();
      window.sessionStorage.clear();
      return {
        ...state,
        currentUser: null,
      };
    case "SET_AUTH_TOKEN":
      window.localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
