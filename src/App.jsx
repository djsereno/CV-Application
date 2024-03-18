import { useState } from 'react';
import { formProps } from './formProps.js';
import Dropdown from './Dropdown';
import CvPage from './CvPage.jsx';
import './normalize.css';
import './App.css';
import './Dropdown.scss';
import './CV.scss';
import './icons.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { exampleData } from './exampledata.js';
import { v4 as getUniqueId } from 'uuid';

// TO DO:
// - updateSubmittedData should only ever update the current dropdown
// - Funny behavior after Loading Example once all entries have been deleted manually
// - Add some animations and transitions

function App() {
  const [openStatus, setOpenStatus] = useState([true, false, false]);
  const [submittedData, setSubmittedData] = useState(initDataStructure(formProps));
  const [unsubmittedData, setUnsubmittedData] = useState(initDataStructure(formProps));
  const [submissionFlags, setSubmissionFlags] = useState(initSubmissionFlags(unsubmittedData));
  const [formIds, setFormIds] = useState(initFormIds(unsubmittedData));
  // console.log(JSON.stringify(unsubmittedData, null, 2));

  const updateUnsubmittedData = (newValue, dropdownId, entryIndex, inputFieldId) => {
    const newUnsubmittedData = { ...unsubmittedData };
    newUnsubmittedData[dropdownId][entryIndex][inputFieldId] = newValue;
    setUnsubmittedData(newUnsubmittedData);
  };

  const updateSubmittedData = (dataToSubmit = unsubmittedData) => {
    // Due to the async nature of setState, when updateSubmittedData is called right after
    // updateUnsubmittedData(for example, in deleteEntryData), we need to provide the mutated
    // form of unsubmittedData directly to this function.
    setSubmittedData(deepCopy(dataToSubmit));
  };

  const updateSubmissionFlags = (dropdownId, newFlagArray) => {
    const newSubmissionFlags = { ...submissionFlags };
    newSubmissionFlags[dropdownId] = newFlagArray;
    setSubmissionFlags(newSubmissionFlags);
  };

  const updateFormIds = (dropdownId, newIdArray) => {
    const newFormIds = { ...formIds };
    newFormIds[dropdownId] = newIdArray;
    setFormIds(newFormIds);
  };

  const addNewEntryData = (dropdownId) => {
    const [dropdownProps] = formProps.filter((dropdownProps) => dropdownProps.id === dropdownId);
    const newFormFields = initFormFields(dropdownProps);
    const newUnsubmittedData = { ...unsubmittedData };
    const currentEntries = newUnsubmittedData[dropdownId];
    newUnsubmittedData[dropdownId] = [...currentEntries, newFormFields];
    setUnsubmittedData(newUnsubmittedData);
  };

  const deleteEntryData = (dropdownId, entryIndex) => {
    // CV component needs index removed AND values cleaned so unsubmitted form values don't get pushed
    // However, sectionVals should preserve unsubmitted form data
    const newUnsubmittedDropdownData = unsubmittedData[dropdownId].filter(
      (values, i) => entryIndex !== i
    );
    const newUnsubmittedData = { ...unsubmittedData };
    newUnsubmittedData[dropdownId] = newUnsubmittedDropdownData;
    setUnsubmittedData(newUnsubmittedData);

    const newSubmittedDropdownData = submittedData[dropdownId].filter(
      (values, i) => entryIndex !== i
    );
    const newSubmittedData = { ...submittedData };
    newSubmittedData[dropdownId] = newSubmittedDropdownData;
    updateSubmittedData(newSubmittedData);
  };

  const toggleOpenStatus = (index) => {
    const newOpenStatus = new Array(3).fill(false);
    newOpenStatus[index] = !openStatus[index];
    setOpenStatus(newOpenStatus);
  };

  const loadExampleData = () => {
    setUnsubmittedData(exampleData);
    setSubmissionFlags(initSubmissionFlags(exampleData, true));
    setFormIds(initFormIds(exampleData));
    updateSubmittedData(exampleData);
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
          <FontAwesomeIcon icon="fa-file-signature" />
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
            updateSubmittedData={() => updateSubmittedData()}
            updateUnsubmittedData={(newValue, entryIndex, inputFieldId) =>
              updateUnsubmittedData(newValue, dropdownProps.id, entryIndex, inputFieldId)
            }
          />
        ))}
        <div className="button-container">
          <button className="load-example-data" onClick={loadExampleData}>
            <FontAwesomeIcon icon="fa-file-import" /> Load Example Data
          </button>
          <button className="clear-all-data" onClick={clearAllData}>
            <FontAwesomeIcon icon="fa-trash-can" /> Clear All Data
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

export default App;
