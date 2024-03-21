import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function InputField({ handleChange, icon, label, type, value }) {
  const inputTag =
    type === 'textarea' ? (
      <textarea
        value={value}
        placeholder={label}
        onChange={handleChange}
        rows="5"
        required></textarea>
    ) : (
      <input type={type} value={value} placeholder={label} onChange={handleChange} required></input>
    );

  return (
    <label className="entry__input">
      <span>
        <FontAwesomeIcon icon={icon} className="fa-fw" />
      </span>
      {inputTag}
    </label>
  );
}

InputField.propTypes = {
  handleChange: PropTypes.func,
  icon: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any
};

export default InputField;
