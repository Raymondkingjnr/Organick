import React from "react";

const FormInput = ({ label, type, placeholder }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="text-sm font-extrabold ">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered w-[300px] md:w-96`}
      />
    </div>
  );
};

export default FormInput;
