import { UserForm } from "../../interfaces";
import { UserState } from "./";

type UserActionType =
  | { type: "[User] - Save user"; payload: UserForm }
  | { type: "[User] - Toggle medic certified" };

export const userReducer = (
  state: UserState,
  action: UserActionType
): UserState => {
  switch (action.type) {
    case "[User] - Save user":
      return {
        ...state,
        userForm: action.payload,
      };

    case "[User] - Toggle medic certified":
      return {
        ...state,
        isMedicCertified: !state.isMedicCertified,
      };

    default:
      return state;
  }
};
