import { createContext } from "react";
import { UserForm } from "../../interfaces";

interface ContextProps {
  userForm: UserForm;
  isMedicCertified: boolean;

  saveUserForm: (userForm: UserForm) => void;
  toggleMedicCertified: () => void;
}

export const UserContext = createContext({} as ContextProps);
