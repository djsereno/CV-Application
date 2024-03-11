import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import EntryForm from './EntryForm';
import EntryOutput from './EntryOutput';

function EntryContainer({
  dropdownId,
  entryData,
  formFields,
  formId,
  handleDelete,
  handleEdit,
  handleSubmit,
  isDeletable,
  isSubmitted,
  updateUnsubmittedData
}) {
  return (
    <div className="subsection-container">
      {isSubmitted ? (
        <EntryOutput handleEdit={handleEdit} dropdownId={dropdownId} entryData={entryData} />
      ) : (
        <EntryForm
          formFields={formFields}
          handleSubmit={handleSubmit}
          formId={formId}
          entryData={entryData}
          updateUnsubmittedData={updateUnsubmittedData}
        />
      )}
      {isDeletable ? (
        <button onClick={handleDelete} className="delete-button">
          <FontAwesomeIcon icon="fa-trash-can" /> {isSubmitted ? null : ' Delete'}
        </button>
      ) : null}
    </div>
  );
}

EntryContainer.propTypes = {
  entryData: PropTypes.object,
  formFields: PropTypes.array,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
  handleSubmit: PropTypes.func,
  formId: PropTypes.string,
  index: PropTypes.number,
  initEntryData: PropTypes.object,
  isDeletable: PropTypes.bool,
  isSubmitted: PropTypes.bool,
  dropdownId: PropTypes.string,
  updateSectionVals: PropTypes.func,
  updateUnsubmittedData: PropTypes.func
};

export default EntryContainer;
