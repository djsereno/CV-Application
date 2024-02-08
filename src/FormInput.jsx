import PropTypes from 'prop-types';
import './App.css';
import Input from './Input';

function FormInput({ formFields, data, handleChange, handleSubmit }) {
  const inputFields = formFields.map((input, index) => (
    <Input
      key={input.id}
      handleChange={(e) => handleChange(e.target.value, index)}
      value={data[input.id]}
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
  formFields: PropTypes.array,
  data: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default FormInput;
