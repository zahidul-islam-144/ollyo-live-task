import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import EducationalInfo from "./components/EducationalInfo";
import WorkInfo from "./components/WorkInfo";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nameField: '',
    emailField: '',
    phnNumField: '',
    addressField: '',
    hobbyField: '',
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleInputData = (inputFieldName) => (e) => {
    console.log("* e::", e);
    console.log("* input::", inputFieldName);

    // const {value } = e.target;

    setFormData((prevStateValue) => ({
      ...prevStateValue,
      [inputFieldName]: e.target.value,
    }));
  };

  return (
    <div className="app_main">
      <div className="titleBlock">
        <p>Registration Form</p>
        <p>Please fill out this form with the required information</p>
      </div>
      <div className="track">
        <div></div>
        <div></div>
        <div></div>
      </div>

      {(() => {
        switch (step) {
          case 1:
            return (
              <PersonalInfo
                step={step}
                nextStep={nextStep}
                handleInputData={handleInputData}
                formData={formData}
              />
            );
          case 2:
            return (
              <EducationalInfo
                nextStep={nextStep}
                handleInputData={handleInputData}
                formData={formData}
              />
            );
          case 3:
            return (
              <WorkInfo
                nextStep={nextStep}
                handleInputData={handleInputData}
                formData={formData}
              />
            );
          default:
            return null;
        }
      })()}
    </div>
  );
}

export default App;
