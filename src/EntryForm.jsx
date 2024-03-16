import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import InputField from './InputField';

function EntryForm({
  entryData,
  formFields,
  formId,
  handleDelete,
  handleSubmit,
  isDeletable,
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
      <div className="form-button-group">
        <button form={formId} type="submit" className="submit-button">
          <FontAwesomeIcon icon="fa-circle-check" />
          {' Submit'}
        </button>
        {isDeletable ? (
          <button onClick={handleDelete} className="delete-button">
            <FontAwesomeIcon icon="fa-trash-can" /> Delete
          </button>
        ) : null}
      </div>
    </>
  );
}

EntryForm.propTypes = {
  entryData: PropTypes.object,
  formFields: PropTypes.array,
  formId: PropTypes.string,
  handleDelete: PropTypes.func,
  handleSubmit: PropTypes.func,
  isDeletable: PropTypes.bool,
  updateUnsubmittedData: PropTypes.func
};

export default EntryForm;
