import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as getUniqueId } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EntryContainer from './EntryContainer';

function Dropdown({
  addNewEntryData,
  deleteEntryData,
  dropdownData,
  dropdownProps,
  isOpen,
  toggleOpenStatus,
  updateSubmittedData,
  updateUnsubmittedData
}) {
  const [submissionFlags, setSubmissionFlags] = useState(
    new Array(dropdownData.length).fill(false)
  );
  const [formIds, setFormIds] = useState(dropdownData.map(() => getUniqueId()));
  const { id, icon, label, formFields } = dropdownProps;

  const addEntry = () => {
    if (submissionFlags.some((value) => value === false)) return false;
    setFormIds([...formIds, getUniqueId()]);
    setSubmissionFlags([...submissionFlags, false]);
    addNewEntryData();
  };

  const deleteEntry = (entryIndex) => {
    // CV component needs index removed AND values cleaned so unsubmitted form values don't get pushed
    // However, sectionVals should preserve unsubmitted form data
    const newKeys = [...formIds.slice(0, entryIndex), ...formIds.slice(entryIndex + 1)];
    const newIsSubmitted = [
      ...submissionFlags.slice(0, entryIndex),
      ...submissionFlags.slice(entryIndex + 1)
    ];
    setFormIds(newKeys);
    setSubmissionFlags(newIsSubmitted);
    deleteEntryData(entryIndex);
  };

  const toggleSubmit = (e, entryIndex) => {
    e.preventDefault();
    const newSubmissionFlags = [...submissionFlags];
    const submissionFlag = !newSubmissionFlags[entryIndex];
    newSubmissionFlags[entryIndex] = submissionFlag;
    setSubmissionFlags(newSubmissionFlags);
    if (submissionFlag) updateSubmittedData(dropdownData, id);
  };

  const content = dropdownData.map((entryData, entryIndex) => (
    <EntryContainer
      key={formIds[entryIndex]}
      entryData={dropdownData[entryIndex]}
      formFields={formFields}
      handleDelete={() => deleteEntry(entryIndex)}
      handleEdit={(e) => toggleSubmit(e, entryIndex, false)}
      handleSubmit={(e) => toggleSubmit(e, entryIndex, true)}
      formId={formIds[entryIndex]}
      initEntryData={entryData}
      isDeletable={dropdownData.length > 1}
      isSubmitted={submissionFlags[entryIndex]}
      dropdownId={id}
      updateUnsubmittedData={(newValue, inputFieldId) =>
        updateUnsubmittedData(newValue, entryIndex, inputFieldId)
      }
    />
  ));

  const addButton =
    id !== 'general' && submissionFlags.every((value) => value === true) ? (
      <button onClick={addEntry} className="add-button">
        <FontAwesomeIcon icon="fa-circle-plus" /> Add {label}
      </button>
    ) : null;

  return (
    <div id={id} className="dropdown-module">
      <div className="dropdown-header">
        <h2>
          <FontAwesomeIcon icon={icon} /> {label}
        </h2>
        <button onClick={toggleOpenStatus}>
          {isOpen ? <FontAwesomeIcon icon="angle-up" /> : <FontAwesomeIcon icon="angle-down" />}
        </button>
      </div>
      {isOpen ? (
        <div className="section-container">
          {content}
          {addButton}
        </div>
      ) : null}
    </div>
  );
}

Dropdown.propTypes = {
  addNewEntryData: PropTypes.func,
  deleteEntryData: PropTypes.func,
  dropdownData: PropTypes.array,
  dropdownProps: PropTypes.object,
  isOpen: PropTypes.bool,
  toggleOpenStatus: PropTypes.func,
  updateSubmittedData: PropTypes.func,
  updateUnsubmittedData: PropTypes.func
};

export default Dropdown;
