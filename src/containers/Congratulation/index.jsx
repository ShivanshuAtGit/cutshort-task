import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MdDone } from "react-icons/md";
import CardWrapper from "../../components/CardWrapper";
import Button from "../../components/Button";
import { UserContext } from "../../context/userContext";
import "./styles.css";

const Congratulation = () => {
  const { stepData, userDetails, resetData } = useContext(UserContext);
  const [values] = userDetails;
  const [steps] = stepData;
  const history = useHistory();

  useEffect(() => {
    if (steps < 4) history.push("/");
  }, []);

  const handleSubmit = () => {
    alert("Launching User");
    resetData();
    history.push("/");
  };

  return (
    <div>
      <div className="done__icon-circle">
        <MdDone className="done__icon" />
      </div>
      <CardWrapper
        title={`Congratulations, ${values.displayName}!`}
        subTitle="You have completed onboarding, you can start using the Eden&#33;"
      ></CardWrapper>
      <Button label="Launch Eden" onClick={handleSubmit} />
    </div>
  );
};

export default Congratulation;
