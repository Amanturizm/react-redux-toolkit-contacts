import React from 'react';

interface Props {
  label: string;
  name: string;
  value: string;
  changeValue: React.ChangeEventHandler;
  type?: string;
}

const NewContactFormItem: React.FC<Props> = ({ label, name, value, changeValue, type }) => {
  return (
    <div className="d-flex justify-content-between align-items-center w-50 pe-5">
      <label htmlFor={`new-contact-form-input-${name}`}>{label}</label>
      <input
        type={type || 'text'}
        name={name}
        id={`new-contact-form-input-${name}`}
        className="form-control w-75"
        value={value}
        onChange={changeValue}
      />
    </div>
  );
};

export default NewContactFormItem;