import React, {
  createContext,
  PropsWithChildren,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

export interface IUserState {
  isAuthenticated: boolean;
  username: null | string;
}

export interface IUserContext {
  userState: IUserState;
  setUserState: Dispatch<SetStateAction<IUserState>>;
}

export const InitialUserState = { isAuthenticated: false, username: null };

export const InitialUserContext = {
  userState: InitialUserState,
  setUserState: () => null,
};

export const UserContext = createContext<IUserContext>(InitialUserContext);

const UserContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [userState, setUserState] = useState<IUserState>(InitialUserState);
  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
