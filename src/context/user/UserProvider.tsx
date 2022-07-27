import { FC, useReducer } from "react";
import { UserForm } from "../../interfaces";

import { UserContext, userReducer } from "./";

export interface UserState {
  userForm: UserForm;
  isMedicCertified: boolean;
}

const USER_INITIAL_STATE: UserState = {
  userForm: {
    alta: "Alta",
    bornDate: "22/02/2000",
    dni: "42.472.582",
    email: "leonelrivas.rl@gmail.com",
    firstName: "Leonel",
    lastName: "Rivas",
    plan: "Full",
    telephone: "1151765055",
  },
  isMedicCertified: false,
};

type Props = {
  children?: React.ReactNode;
};

export const UserProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, USER_INITIAL_STATE);

  const saveUserForm = (userForm: UserForm) => {
    dispatch({
      type: "[User] - Save user",
      payload: userForm,
    });
  };

  const toggleMedicCertified = () => {
    dispatch({
      type: "[User] - Toggle medic certified",
    });
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        saveUserForm,
        toggleMedicCertified,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
