import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import InputField from './InputField';

function EntryForm({
  formFields,
  handleSubmit,
  formId,
  entryData,
  updateUnsubmittedData
}) {
  const inputComponents = formFields.map((input) => (
    <InputField
      key={input.id}
      handleChange={(e) => {
        updateUnsubmittedData(e.target.value, input.id);
      }}
      value={entryData[input.id]}
      {...input}
    />
  ));

  return (
    <>
      <form className="section-form" id={formId} onSubmit={handleSubmit}>
        {inputComponents}
      </form>
      <button form={formId} type="submit" className="submit-button">
        <FontAwesomeIcon icon="fa-circle-check" />
        {' Submit'}
      </button>
    </>
  );
}

EntryForm.propTypes = {
  formFields: PropTypes.array,
  handleSubmit: PropTypes.func,
  formId: PropTypes.string,
  entryData: PropTypes.object,
  updateUnsubmittedData: PropTypes.func
};

export default EntryForm;
