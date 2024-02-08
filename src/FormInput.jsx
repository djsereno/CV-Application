import PropTypes from 'prop-types';
import Input from './Input';

function FormInput({ formFields, handleSubmit, subsectionVals, updateSubsectionVals }) {
  const inputComponents = formFields.map((input) => (
    <Input
      key={input.id}
      handleChange={(e) => updateSubsectionVals(e.target.value, input.id)}
      value={subsectionVals[input.id]}
      {...input}
    />
  ));

  return (
    <div className="dropdown-section">
      <form className="section-form" onSubmit={handleSubmit}>
        {inputComponents}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

FormInput.propTypes = {
  formFields: PropTypes.array,
  handleSubmit: PropTypes.func,
  subsectionVals: PropTypes.object,
  updateSubsectionVals: PropTypes.func
};

export default FormInput;
