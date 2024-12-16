import axios from 'axios';
const initialState = {
  email: '',
  password: '',
  loggedIn: false,
};
const SET_USER = 'SET_USER';
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        loggedIn: action.payload.loggedIn,
      };
    default:
      return state;
  }
};
export const setUser = (userData) => ({
  type: SET_USER,
  payload: userData,
});
export const login = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('https://dummyjson.com/auth/login', userData);
    if (response.data) {
      dispatch(setUser({
        email: userData.email,
        password: userData.password,
        loggedIn: true,
      }));
    }
  } catch (error) {
    console.error('Login failed:', error);
  }
};
export default userReducer;