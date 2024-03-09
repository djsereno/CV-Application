import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import InputField from './InputField';

function EntryForm({ formFields, handleSubmit, id, subsectionVals, updateSubsectionVals }) {
  const inputComponents = formFields.map((input) => (
    <InputField
      key={input.id}
      handleChange={(e) => updateSubsectionVals(e.target.value, input.id)}
      value={subsectionVals[input.id]}
      {...input}
    />
  ));

  return (
    <>
      <form className="section-form" id={id} onSubmit={handleSubmit}>
        {inputComponents}
      </form>
      <button form={id} type="submit" className="submit-button">
        <FontAwesomeIcon icon="fa-circle-check" />
        {' Submit'}
      </button>
    </>
  );
}

EntryForm.propTypes = {
  formFields: PropTypes.array,
  handleSubmit: PropTypes.func,
  id: PropTypes.string,
  subsectionVals: PropTypes.object,
  updateSubsectionVals: PropTypes.func
};

export default EntryForm;
