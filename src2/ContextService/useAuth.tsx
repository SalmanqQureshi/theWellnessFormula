import { Children, createContext, PropsWithChildren, useContext, useState } from 'react';

const AuthContext = createContext(null);

interface AuthProviderPropType extends PropsWithChildren {
  PersistVersion: number;
}

export const AuthProvider = ({children,PersistVersion}:AuthProviderPropType) => {
  const [user, setUser] = useState(null);
  const login = (userData: any) => {
    setUser(userData);
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        islogin:!!user,
        login,
        logout,
      }}
    >{children}</AuthContext.Provider>
  );
};
export const useAuth = ()=>{
  return useContext(AuthContext)
}