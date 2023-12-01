import React from 'react';

const Button = ({content, className, disabled, isSubmit, setIsSubmit}) => {

    
    return (
        <button 
        className={className} 
        disabled={disabled}
        onClick={()=>setIsSubmit(true)}
        type={`isSubmit ? "submit" : "" `}
        >
            {content}
        </button>
    );
};

export default Button;