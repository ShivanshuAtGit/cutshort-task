import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { HiUserGroup } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import CardWrapper from "../../components/CardWrapper";
import Button from "../../components/Button";
import RadioCards from "../../components/RadioCards";
import { UserContext } from "../../context/userContext";
import "./styles.css";

const UserBase = () => {
  const initialBaseValues = {
    single: false,
    group: false,
  };

  const { stepData, baseDetails } = useContext(UserContext);
  const [values, setValues] = baseDetails;
  const [steps, setSteps] = stepData;
  const history = useHistory();

  const handleSubmit = (e) => {
    if (values.single || values.group) {
      setSteps((prev) => prev + 1);
      history.push("/completed");
    } else alert("Select anyone of them");
  };

  const handleChange = (e) => {
    const { id } = e.currentTarget;
    setValues((prev) => ({ ...initialBaseValues, [id]: !prev[id] }));
  };

  useEffect(() => {
    if (steps < 3) history.push("/");
    setSteps(3);
  }, []);

  return (
    <CardWrapper
      title="How are you planning to you Eden?"
      subTitle="We&#39;ll streamline your experience according."
    >
      <div className="user_detail-card">
        <div className="base-cards__wrapper">
          <RadioCards
            isSelected={values.single}
            Icon={IoPerson}
            title="For Myself"
            subTitle="Write Better. Think more clearly. Stay organized."
            onClick={handleChange}
            id="single"
          />
          <RadioCards
            isSelected={values.group}
            Icon={HiUserGroup}
            title="With my team"
            subTitle="Wikis, docs, tasks &amp; projects, all in one place."
            onClick={handleChange}
            id="group"
          />
        </div>
        <Button label="Create Workspaces" onClick={handleSubmit} />
      </div>
    </CardWrapper>
  );
};

export default UserBase;
