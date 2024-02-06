import PropTypes from 'prop-types';
import './App.css';
import Input from './Input';

function FormInput({ data, handleChange, handleSubmit }) {
  const inputFields = data.map((input, index) => (
    <Input
      key={input.label}
      handleChange={(e) => handleChange(e.target.value, index)}
      value={input.value}
      {...input}
    />
  ));

  return (
    <div className="dropdown-section">
      <form className="section-form" onSubmit={handleSubmit}>
        {inputFields}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

FormInput.propTypes = {
  data: PropTypes.array,
  handleChange: PropTypes.func,
  toggleSubmit: PropTypes.func
};

export default FormInput;
