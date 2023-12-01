const FormInput = ({ value, handleOnChange, name, error, ...inputProps }) => {
  return (
    <>
      <div className="personalInfo_input_main">
        <input {...inputProps} value={value} onChange={handleOnChange} />
        {name === "hobbyField" && <div className="addHobby">+</div>}
      </div>
      {
        error ? <p className="error">hhhh</p> : <></>
      }
    </>
  );
};

export default FormInput;
