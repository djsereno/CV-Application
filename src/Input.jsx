import PropTypes from 'prop-types';
import './App.css';

function Input({ label, placeholder, type, value, handleChange }) {
  const inputField =
    type === 'textarea' ? (
      <textarea value={value} placeholder={placeholder} onChange={handleChange} required></textarea>
    ) : (
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        required></input>
    );

  return (
    <label>
      {`${label}: `}
      {inputField}
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any,
  handleChange: PropTypes.func
};

export default Input;
