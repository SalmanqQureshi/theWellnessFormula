import React from 'react';
import { RootNavigation } from './container';
import { AuthProvider } from './ContextService/useAuth';
const App = () => {
  return (
    <AuthProvider PersistVersion={0}>
      <RootNavigation />
    </AuthProvider>
  );
};

export default App;
