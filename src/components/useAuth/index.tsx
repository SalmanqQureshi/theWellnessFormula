// import AsyncStorage from '@react-native-async-storage/async-storage';
const AsyncStorage = {}
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { UserType } from '../../types';
//#region Types and DefaultValues
interface AuthStateType {
  isLoggedIn: boolean;
  user?: UserType;
}
interface AuthContextType extends AuthStateType {
  logIn: (params: AuthStateType) => any;
  logOut: () => any;
}

interface AuthProviderPropType extends PropsWithChildren {
  PersistVersion: number;
}

const defaultAuthValues: AuthStateType = {
  isLoggedIn: false,
};
//#endregion

export const AuthContext = createContext<AuthContextType>({
  ...defaultAuthValues,
  logIn: () => {},
  logOut: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({
  children,
  PersistVersion = 0,
}: AuthProviderPropType) => {
  const [Auth, setAuth] = useState<AuthStateType>(defaultAuthValues);
  const logIn = (user) => {
    setAuth(s => ({
      ...s,
      user,
      isLoggedIn: true,
    }));
  };
  const logOut = () => {
    setAuth(defaultAuthValues);
  };
  useEffect(() => {
    if (!PersistVersion) return () => {};
    AsyncStorage.getItem('auth').then(val => {
      if (!val) return;
      const AuthData = JSON.parse(val);
      if (PersistVersion == AuthData.PersistVersion) {
        setAuth(AuthData.data);
      }
    });
    return () => {};
  }, []);
  useEffect(() => {
    if (!PersistVersion) return () => {};
    AsyncStorage.setItem(
      'auth',
      JSON.stringify({
        data: {isLoggedIn: Auth.isLoggedIn},
        PersistVersion: PersistVersion,
      }),
    );
    return () => {};
  }, [Auth]);
  return (
    <AuthContext.Provider value={{...Auth, logIn, logOut}}>
      {children}
    </AuthContext.Provider>
  );
};
