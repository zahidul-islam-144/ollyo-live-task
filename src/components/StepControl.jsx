import React from "react";
import Button from "../sharedComponents/Button";

const StepControl = ({ step, isNext, isSubmit, setIsSubmit }) => {
    console.log('stepControl:',step, isNext)
  const disabled = isNext ? false : true;
  return (
    <div className="stepControl_main">
      <Button
        content="Previous"
        className={`button ${
          step === 1 ? "disableBg_color" : "activeBg_color"
        }`}
        disabled={disabled}
        isSubmit={isSubmit}
        setIsSubmit={setIsSubmit}
      />

      <Button
        content="Next"
        className={`button ${
            disabled === 1 ? "disableBg_color" : "activeBg_color"
        }`}
        disabled={disabled}
        isSubmit={isSubmit}
        setIsSubmit={setIsSubmit}
      />
    </div>
  );
};

export default StepControl;
