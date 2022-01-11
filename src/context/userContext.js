import React, { createContext, useState } from "react";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [steps, setSteps] = useState(1);

    return (
        <UserContext.Provider value={[steps, setSteps]}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;