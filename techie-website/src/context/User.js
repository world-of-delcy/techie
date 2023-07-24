import { createContext, useContext, useState, useEffect } from "react";

export const UserContext = createContext();
UserContext.displayName = "UserContext";

export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    // check if the user is logged in by sending the request
    // const fetchUser = async () => {
    //   //
    // };
    // fetchUser();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
