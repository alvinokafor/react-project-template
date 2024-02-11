import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { User } from "@/lib/types/User";

interface IUserProvider {
  children: React.ReactNode;
}

export interface IUserContext {
  user: User | null;
  token: string | null;
  isUserAuthenticated: () => boolean;
  setUser: Dispatch<SetStateAction<User | null>>;
  setToken: Dispatch<SetStateAction<string | null>>;
}

const UserContext = createContext<IUserContext | null>(null);

const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const isUserAuthenticated = () => !!user;

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        isUserAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
