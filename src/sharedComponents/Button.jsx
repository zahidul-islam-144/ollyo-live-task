import React from 'react';

const Button = ({content, className, disabled}) => {
    return (
        <button className={className} disabled={disabled}>{content}</button>
    );
};

export default Button;