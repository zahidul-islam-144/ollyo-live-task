import React, { useState } from "react";
import { formUtility } from "../utilities/utilities";
import FormInput from "../sharedComponents/FormInput";
import Label from "../sharedComponents/Label";
import StepControl from "./StepControl";
import validator from "validator";

const PersonalInfo = ({ step, nextStep, handleInputData, formData }) => {
    console.log("* formData:", formData)
  const [error, setError] = useState('');
  const [submit, setIsSubmit] = useState(false)
  const { personalInfo } = formUtility;


  const submitFormData = (e) => {
    e.preventDefault();
    if (
      validator.isEmpty(formData.nameField) ||
      validator.isEmpty(formData.emailField) ||
      validator.isEmpty(formData.phnNumField) ||
      validator.isEmpty(formData.addressField) ||
      validator.isEmpty(formData.hobbyField)
    ) {
        setError("Field can't be empty.")
    }else if(!validator.isEmail(formData.emailField)){
        setError("Invalid email.")
    }else{
        nextStep();
    }
  };
console.log('* error', error, step)


  return (
    <section className="personalInfoMain">
      <form onSubmit={submitFormData} className="personalInfoForm">
        {personalInfo.map((info) => (
          <div>
            <Label label={info?.label} />
            <FormInput
              type={info?.type}
              name={info?.name}
              for={info?.for}
              value={formData[info?.name]}
              placeholder={info?.placeholder}
              handleOnChange={handleInputData(info?.name)}
              error={error}
            />
          </div>
        ))}
      </form>
      <StepControl step={step} isNext={true} isSubmit={handeSubmit}/>
    </section>
  );
};

export default PersonalInfo;
