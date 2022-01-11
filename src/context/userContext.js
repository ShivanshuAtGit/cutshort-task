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

  const resetData = () => {
    userDetails[1](initialValues.userDetails);
    workspaceDetails[1](initialValues.workspaceDetails);
    baseDetails[1](initialValues.baseDetails);
  }

  const userProps = {
    stepData,
    userDetails,
    workspaceDetails,
    baseDetails,
    resetData,
  };

  return <UserContext.Provider value={userProps}>{children}</UserContext.Provider>;
};

export default UserProvider;
