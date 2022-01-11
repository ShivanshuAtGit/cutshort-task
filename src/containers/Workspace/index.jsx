import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CardWrapper from "../../components/CardWrapper";
import InputBase from "../../components/InputBase";
import Button from "../../components/Button";
import { UserContext } from "../../context/userContext";
import "./styles.css";

const Workspace = () => {
  const { stepData, workspaceDetails } = useContext(UserContext);
  const [values, setValues] = workspaceDetails;
  const [steps, setSteps] = stepData;
  const history = useHistory();

  const handleSubmit = (e) => {
    if (values.workspaceName && values.url) {
      e.preventDefault();
      setSteps((prev) => prev + 1);
      history.push("/user-base");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (steps < 2) history.push("/");
    setSteps(2);
  }, []);

  const Label = () => {
    return (
      <span>
        Workspace URL <span className="label-optional">(optional)</span>
      </span>
    );
  };

  return (
    <CardWrapper
      title="Let&#39;s set up a home for all your work"
      subTitle="You can always change them later."
    >
      <div className="user_detail-card">
        <form>
          <InputBase
            required
            label="Workspace Name"
            placeholder="Eden"
            name="workspaceName"
            id="workspaceName"
            value={values.workspaceName}
            onChange={handleChange}
          />
          <InputBase
            required
            label={<Label />}
            placeholder="Example"
            name="url"
            id="url"
            variant="with-text"
            text="www.eden.com/"
            value={values.url}
            onChange={handleChange}
          />
          <Button label="Create Workspaces" onClick={handleSubmit} />
        </form>
      </div>
    </CardWrapper>
  );
};

export default Workspace;
