import React, { createContext, useState } from "react";
export const UserContext = createContext();

const initialValues = {
  userDetails: {
    username: "",
    displayName: "",
  },
  workspaceDetails: {
    workspaceName: "",
    url: "",
  },
  baseDetails: {
    single: false,
    group: false,
  },
};

const UserProvider = ({ children }) => {
  const baseDetails = useState(initialValues.baseDetails);
  const userDetails = useState(initialValues.userDetails);
  const workspaceDetails = useState(initialValues.workspaceDetails);
  const stepData = useState(1);

  const data = {
    stepData,
    userDetails,
    workspaceDetails,
    baseDetails,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserProvider;
