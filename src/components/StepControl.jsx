import React from "react";
import Button from "../sharedComponents/Button";

const StepControl = ({ step, isNext, isSubmit }) => {
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
      />

      <Button
        content="Next"
        className={`button ${
            disabled === 1 ? "disableBg_color" : "activeBg_color"
        }`}
        disabled={disabled}
        isSubmit={isSubmit}
      />
    </div>
  );
};

export default StepControl;
