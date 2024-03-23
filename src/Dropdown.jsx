// import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as getUniqueId } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EntryContainer from './EntryContainer';

function Dropdown({
  addNewEntryData,
  deleteEntryData,
  dropdownData,
  dropdownProps,
  formIds,
  isOpen,
  submissionFlags,
  toggleOpenStatus,
  updateFormIds,
  updateSubmissionFlags,
  updateSubmittedData,
  updateUnsubmittedData
}) {
  const { id, icon, label, formFields } = dropdownProps;

  const addEntry = () => {
    if (submissionFlags.some((value) => value === false)) return false;
    updateFormIds([...formIds, getUniqueId()]);
    updateSubmissionFlags([...submissionFlags, false]);
    addNewEntryData();
  };

  const clearEntry = (entryIndex) => {
    Object.keys(dropdownData[entryIndex]).forEach((inputFieldId) => {
      updateUnsubmittedData('', entryIndex, inputFieldId);
    });
    updateSubmittedData();
  };

  const deleteEntry = (entryIndex) => {
    // CV component needs index removed AND values cleaned so unsubmitted form values don't get pushed
    // However, sectionVals should preserve unsubmitted form data
    if (dropdownData.length === 1) {
      updateSubmissionFlags([false]);
      clearEntry(entryIndex);
    } else {
      const newFormIds = [...formIds.slice(0, entryIndex), ...formIds.slice(entryIndex + 1)];
      const newFlags = [
        ...submissionFlags.slice(0, entryIndex),
        ...submissionFlags.slice(entryIndex + 1)
      ];
      updateFormIds(newFormIds);
      updateSubmissionFlags(newFlags);
      deleteEntryData(entryIndex);
    }
  };

  const toggleSubmit = (e, entryIndex) => {
    e.preventDefault();
    const newFlags = [...submissionFlags];
    const newFlag = !newFlags[entryIndex];
    newFlags[entryIndex] = newFlag;
    updateSubmissionFlags(newFlags);

    if (newFlag) updateSubmittedData(id);
  };

  const content = dropdownData.map((entryData, entryIndex) => (
    <EntryContainer
      key={formIds[entryIndex]}
      entryData={dropdownData[entryIndex]}
      formFields={formFields}
      handleDelete={() => deleteEntry(entryIndex)}
      handleEdit={(e) => toggleSubmit(e, entryIndex)}
      handleSubmit={(e) => toggleSubmit(e, entryIndex)}
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
        <FontAwesomeIcon icon="fa-circle-plus" className="fa-fw" /> Add {label}
      </button>
    ) : null;

  return (
    <div id={id} className={`dropdown ${isOpen ? '' : 'dropdown--collapsed'}`}>
      <div className="dropdown__header">
        <h2>
          <FontAwesomeIcon icon={icon} className="fa-fw" /> {label}
        </h2>
        <button onClick={toggleOpenStatus}>
          <FontAwesomeIcon icon="angle-down" className="fa-fw" />
        </button>
      </div>
      <div className="dropdown__body">
        <div className="scrollable">
          <div className="padding">
            {/* these wrappers seems redundant but is required for smooth dropdown */}
            {/* transitions since we can transition __body max-height but not padding*/}
            {/* and better layout to accommodate the scrollbar */}
            {content}
            {addButton}
          </div>
        </div>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  addNewEntryData: PropTypes.func,
  deleteEntryData: PropTypes.func,
  dropdownData: PropTypes.array,
  dropdownProps: PropTypes.object,
  formIds: PropTypes.array,
  isOpen: PropTypes.bool,
  submissionFlags: PropTypes.array,
  toggleOpenStatus: PropTypes.func,
  updateFormIds: PropTypes.func,
  updateSubmissionFlags: PropTypes.func,
  updateSubmittedData: PropTypes.func,
  updateUnsubmittedData: PropTypes.func
};

export default Dropdown;
