import { PasswordVisibility } from "../state/actionCreator/showactiontype";
const initialState = {
  showPassword: false,
};
const showPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
      case PasswordVisibility:
          return { ...state, PasswordVisibility: !state.PasswordVisibility };
      default:
          return state;
  }
};
export default showPasswordReducer;