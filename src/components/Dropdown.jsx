import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { v4 as getUniqueId } from 'uuid';

import EntryForm from '../components/EntryForm.jsx';
import EntryOutput from '../components/EntryOutput.jsx';

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
    updateSubmittedData(entryIndex);
  };

  const deleteEntry = (entryIndex) => {
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
    if (newFlag) updateSubmittedData(entryIndex);
  };

  const content = dropdownData.map((entryData, entryIndex) => (
    <div className="entry" key={formIds[entryIndex]}>
      {submissionFlags[entryIndex] ? (
        <EntryOutput
          dropdownId={id}
          entryData={entryData}
          handleDelete={() => deleteEntry(entryIndex)}
          handleEdit={(e) => toggleSubmit(e, entryIndex)}
        />
      ) : (
        <EntryForm
          entryData={entryData}
          formFields={formFields}
          formId={formIds[entryIndex]}
          handleDelete={() => deleteEntry(entryIndex)}
          handleSubmit={(e) => toggleSubmit(e, entryIndex)}
          isDeletable={dropdownData.length > 1}
          updateUnsubmittedData={(newValue, inputFieldId) =>
            updateUnsubmittedData(newValue, entryIndex, inputFieldId)
          }
        />
      )}
    </div>
  ));

  const addButton =
    id !== 'general' && submissionFlags.every((value) => value === true) ? (
      <button onClick={addEntry} className="add-button">
        <FontAwesomeIcon icon={faCirclePlus} className="fa-fw" /> Add {label}
      </button>
    ) : (
      false
    );

  return (
    <div id={id} className={`dropdown ${isOpen ? '' : 'dropdown--collapsed'}`}>
      <div className="dropdown__header">
        <h2>
          <FontAwesomeIcon icon={icon} className="fa-fw" /> {label}
        </h2>
        <button onClick={toggleOpenStatus}>
          <FontAwesomeIcon icon={faAngleDown} className="fa-fw" />
        </button>
      </div>
      <div className="dropdown__body">
        <div className="scrollable">
          <div className="padding">
            {/* these wrappers seems redundant but are required for smooth dropdown */}
            {/* transitions since we can't transition __body padding*/}
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
