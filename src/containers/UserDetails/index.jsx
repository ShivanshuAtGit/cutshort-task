import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import CardWrapper from "../../components/CardWrapper";
import Button from "../../components/Button";
import InputBase from "../../components/InputBase";
import { UserContext } from "../../context/userContext";
import "./styles.css";

const UserDetails = () => {
  const { stepData, userDetails } = useContext(UserContext);
  const [values, setValues] = userDetails;
  const [steps, setSteps] = stepData;
  const history = useHistory();

  const handleSubmit = (e) => {
    if (values.username && values.displayName) {
      e.preventDefault();
      setSteps((prev) => prev + 1);
      history.push("/workspace");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setSteps(1);
  }, []);

  return (
    <CardWrapper
      title="Welcome&#33; First things first..."
      subTitle="You can always change them later."
    >
      <div className="user_detail-card">
        <form>
          <InputBase
            required
            label="Full Name"
            placeholder="Steve Jobs"
            name="username"
            id="username"
            value={values.username}
            onChange={handleChange}
          />
          <InputBase
            required
            label="Display Name"
            placeholder="Steve"
            name="displayName"
            id="username"
            value={values.displayName}
            onChange={handleChange}
          />
          <Button label="Create Workspaces" onClick={handleSubmit} />
        </form>
      </div>
    </CardWrapper>
  );
};

export default UserDetails;
