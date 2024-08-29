import { createContext, useState } from 'react';

const UserContext = createContext({
  user: {}, // Initialize user with an empty object
  setUser: () => {}, // Initialize setUser with a no-op function
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({}); // Initialize user state with an empty object

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };