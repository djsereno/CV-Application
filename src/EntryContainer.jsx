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
        <EntryOutput
          dropdownId={dropdownId}
          entryData={entryData}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ) : (
        <EntryForm
          entryData={entryData}
          formFields={formFields}
          formId={formId}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
          isDeletable={isDeletable}
          updateUnsubmittedData={updateUnsubmittedData}
        />
      )}
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
