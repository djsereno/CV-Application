/* eslint-disable react/prop-types */
import './App.css';

function Input({ label, placeholder, type, value, isSubmitted, onChange }) {
  const inputField =
    type === 'textarea' ? (
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        readOnly={isSubmitted}
        required></textarea>
    ) : (
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        readOnly={isSubmitted}
        required></input>
    );

  return (
    <label>
      {`${label}: `}
      {inputField}
    </label>
  );
}

export default Input;
