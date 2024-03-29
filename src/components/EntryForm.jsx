import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

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
      <form className="entry__form" id={formId} onSubmit={handleSubmit}>
        {inputComponents}
      </form>
      <div className="entry__form-buttons">
        <button form={formId} type="submit" className="submit-button">
          <FontAwesomeIcon icon={faCircleCheck} className="fa-fw" />
          {' Submit'}
        </button>
        {isDeletable ? (
          <button onClick={handleDelete} className="delete-button">
            <FontAwesomeIcon icon={faTrashCan} className="fa-fw" /> Delete
          </button>
        ) : (
          false
        )}
      </div>
    </>
  );
}

InputField.propTypes = {
  handleChange: PropTypes.func,
  icon: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any
};
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
