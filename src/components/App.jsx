import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImport, faFileSignature, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { v4 as getUniqueId } from 'uuid';

import { exampleData } from '../utils/exampleData.js';
import { formProps } from '../utils/formProps.js';

import CvPage from '../components/CvPage.jsx';
import Dropdown from '../components/Dropdown.jsx';

import '../styles/App.scss';
import '../styles/CV.scss';
import '../styles/Dropdown.scss';
import '../styles/normalize.scss';

// TO DO:
// - Address props drilling
// - Clean up propTypes
// - Clean up unnecessary props
// - Editing multiple forms then submitting one submits both

function App() {
  const [openStatus, setOpenStatus] = useState([true, false, false]);
  const [submittedData, setSubmittedData] = useState(initDataStructure(formProps));
  const [unsubmittedData, setUnsubmittedData] = useState(initDataStructure(formProps));
  const [submissionFlags, setSubmissionFlags] = useState(initSubmissionFlags(unsubmittedData));
  const [formIds, setFormIds] = useState(initFormIds(unsubmittedData));

  const updateUnsubmittedData = (newValue, dropdownId, entryIndex, inputFieldId) => {
    const newUnsubmittedData = { ...unsubmittedData };
    newUnsubmittedData[dropdownId][entryIndex][inputFieldId] = newValue;
    setUnsubmittedData(newUnsubmittedData);
  };

  const updateSubmittedData = (dataToSubmit = unsubmittedData, dropdownId) => {
    // If dropdownId is provided, only that dropdownId will be submitted. the entire data
    // Otherwise, the entire data structure will be submitted
    if (!dropdownId) {
      setSubmittedData(deepCopy(dataToSubmit));
    } else {
      const newDropdownData = deepCopy(dataToSubmit)[dropdownId];
      setSubmittedData({ ...submittedData, [dropdownId]: newDropdownData });
    }
  };

  const updateSubmissionFlags = (dropdownId, newFlagArray) => {
    setSubmissionFlags({ ...submissionFlags, [dropdownId]: newFlagArray });
  };

  const updateFormIds = (dropdownId, newIdArray) => {
    setFormIds({ ...formIds, [dropdownId]: newIdArray });
  };

  const addNewEntryData = (dropdownId) => {
    const [dropdownProps] = formProps.filter((dropdownProps) => dropdownProps.id === dropdownId);
    const newFormFields = initFormFields(dropdownProps);
    const newUnsubmittedData = { ...unsubmittedData };
    newUnsubmittedData[dropdownId] = [...newUnsubmittedData[dropdownId], newFormFields];
    setUnsubmittedData(newUnsubmittedData);
  };

  const deleteEntryData = (dropdownId, entryIndex) => {
    setUnsubmittedData(omitItemFromDropdownAtIndex(unsubmittedData, dropdownId, entryIndex));
    setSubmittedData(omitItemFromDropdownAtIndex(submittedData, dropdownId, entryIndex));
  };

  const toggleOpenStatus = (index) => {
    const newOpenStatus = new Array(3).fill(false);
    newOpenStatus[index] = !openStatus[index];
    setOpenStatus(newOpenStatus);
  };

  const loadExampleData = () => {
    setFormIds(initFormIds(exampleData));
    setSubmissionFlags(initSubmissionFlags(exampleData, true));
    setUnsubmittedData(deepCopy(exampleData));
    setSubmittedData(deepCopy(exampleData));
  };

  const clearAllData = () => {
    const newBlankData = initDataStructure(formProps);
    setFormIds(initFormIds(newBlankData));
    setSubmissionFlags(initSubmissionFlags(newBlankData));
    setUnsubmittedData(deepCopy(newBlankData));
    setSubmittedData(deepCopy(newBlankData));
  };

  return (
    <>
      <div id="dropdown-container">
        <h1 id="title">
          <FontAwesomeIcon icon={faFileSignature} className="fa-fw" />
          CVWizard
        </h1>
        {formProps.map((dropdownProps, index) => (
          <Dropdown
            key={dropdownProps.id}
            addNewEntryData={() => addNewEntryData(dropdownProps.id)}
            deleteEntryData={(entryIndex) => deleteEntryData(dropdownProps.id, entryIndex)}
            dropdownData={unsubmittedData[dropdownProps.id]}
            dropdownProps={dropdownProps}
            formIds={formIds[dropdownProps.id]}
            isOpen={openStatus[index]}
            submissionFlags={submissionFlags[dropdownProps.id]}
            toggleOpenStatus={() => toggleOpenStatus(index)}
            updateFormIds={(newIdArray) => updateFormIds(dropdownProps.id, newIdArray)}
            updateSubmissionFlags={(newFlagArray) =>
              updateSubmissionFlags(dropdownProps.id, newFlagArray)
            }
            updateSubmittedData={(dropdownId) => updateSubmittedData(unsubmittedData, dropdownId)}
            updateUnsubmittedData={(newValue, entryIndex, inputFieldId) =>
              updateUnsubmittedData(newValue, dropdownProps.id, entryIndex, inputFieldId)
            }
          />
        ))}
        <div className="button-container">
          <button onClick={loadExampleData}>
            <FontAwesomeIcon icon={faFileImport} className="fa-fw" /> Load Example Data
          </button>
          <button onClick={clearAllData}>
            <FontAwesomeIcon icon={faTrashCan} className="fa-fw" /> Clear All Data
          </button>
        </div>
      </div>
      <CvPage {...submittedData} />
    </>
  );
}

const initDataStructure = (formProps) => {
  // Creates a blank data structure to store the form data.
  // Example: {general: [{data}],
  //           education: [{ school1 }, { school2 }, ...],
  //           workExperience: [{ job1 }, { job2 }, ...]}
  const dataStructure = formProps.map((dropdownProps) => {
    const formFields = initFormFields(dropdownProps);
    return [dropdownProps.id, [formFields]];
  });
  return Object.fromEntries(dataStructure);
};

const initFormFields = (dropdownProps) => {
  const keyValuePairs = dropdownProps.formFields.map((inputField) => [inputField.id, '']);
  return Object.fromEntries(keyValuePairs);
};

const initSubmissionFlags = (unsubmittedData, submitAll = false) => {
  const keyValuePairs = Object.entries(unsubmittedData).map(([dropdownId, entries]) => {
    const flagArray = Array(entries.length).fill(true);
    if (!submitAll) flagArray[0] = false;
    return [dropdownId, flagArray];
  });
  return Object.fromEntries(keyValuePairs);
};

const initFormIds = (unsubmittedData) => {
  const keyValuePairs = Object.entries(unsubmittedData).map(([dropdownId, entries]) => {
    const idArray = entries.map(() => getUniqueId());
    return [dropdownId, idArray];
  });
  return Object.fromEntries(keyValuePairs);
};

const deepCopy = (object) => JSON.parse(JSON.stringify(object));

const omitItemFromDropdownAtIndex = (data, dropdownId, index) => {
  const newDropdownData = data[dropdownId].filter((values, i) => index !== i);
  return { ...data, [dropdownId]: newDropdownData };
};

export default App;
