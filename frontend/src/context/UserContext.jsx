import { createContext } from "react";

const currentUser = {
  name: "Alex Developer",
  role: "Admin",
  plan: "Pro"
};

const UserContext = createContext(currentUser);

const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={currentUser}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
