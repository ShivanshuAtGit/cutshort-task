import React, { useState } from "react";
import CardWrapper from "../../components/CardWrapper";
import Button from "../../components/CardWrapper/Button";
import InputBase from "../../components/InputBase";
import "./styles.css";

const UserDetails = () => {
  const initialValues = {
    username: "",
    displayName: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

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
          <Button label="Create Workspaces" />
        </form>
      </div>
    </CardWrapper>
  );
};

export default UserDetails;
