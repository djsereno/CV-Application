import PropTypes from 'prop-types';

function Input({ handleChange, label, placeholder, type, value }) {
  const inputTag =
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
      {inputTag}
    </label>
  );
}

Input.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any
};

export default Input;
