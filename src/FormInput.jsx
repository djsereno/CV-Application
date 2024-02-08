import PropTypes from 'prop-types';
import './App.css';
import Input from './Input';

function FormInput({ formFields, formVals, updateFormVals, handleSubmit }) {
  const inputFields = formFields.map((input) => (
    <Input
      key={input.id}
      handleChange={(e) => updateFormVals(e.target.value, input.id)}
      value={formVals[input.id]}
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
  formVals: PropTypes.object,
  updateFormVals: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default FormInput;
