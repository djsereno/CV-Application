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

function App() {
  const [openStatus, setOpenStatus] = useState([true, false, false]);
  const [submittedData, setSubmittedData] = useState(initDataStructure(formProps));
  const [unsubmittedData, setUnsubmittedData] = useState(initDataStructure(formProps));
  const [submissionFlags, setSubmissionFlags] = useState(initSubmissionFlags(unsubmittedData));

  const updateSubmittedData = (dropdownId, dataToSubmit = unsubmittedData) => {
    // Due to the async nature of setState, when updateSubmittedData is called right after
    // updateUnsubmittedData(for example, in deleteEntryData), we need to provide the mutated
    // form of unsubmittedData directly to this function.
    const newSubmittedData = { ...submittedData };
    newSubmittedData[dropdownId] = dataToSubmit[dropdownId];
    setSubmittedData(newSubmittedData);
  };

  const updateUnsubmittedData = (newValue, dropdownId, entryIndex, inputFieldId) => {
    const newUnsubmittedData = { ...unsubmittedData };
    newUnsubmittedData[dropdownId][entryIndex][inputFieldId] = newValue;
    setUnsubmittedData(newUnsubmittedData);
  };

  const updateSubmissionFlags = (dropdownId, newFlagArray) => {
    const newSubmissionFlags = { ...submissionFlags };
    newSubmissionFlags[dropdownId] = newFlagArray;
    setSubmissionFlags(newSubmissionFlags);
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
    const dropdownData = unsubmittedData[dropdownId];
    const newDropdownData = dropdownData.filter((values, i) => entryIndex !== i);
    const newUnsubmittedData = { ...unsubmittedData };
    newUnsubmittedData[dropdownId] = newDropdownData;
    setUnsubmittedData(newUnsubmittedData);
    updateSubmittedData(dropdownId, newUnsubmittedData);
  };

  const toggleOpenStatus = (index) => {
    const newOpenStatus = new Array(3).fill(false);
    newOpenStatus[index] = !openStatus[index];
    setOpenStatus(newOpenStatus);
  };

  const loadExampleData = () => {
    for (const [key, value] of Object.entries(exampleData)) {
      updateSubmittedData(value, key);
    }
  };

  return (
    <>
      <div id="dropdown-container">
        {formProps.map((dropdownProps, index) => (
          <Dropdown
            key={dropdownProps.id}
            addNewEntryData={() => addNewEntryData(dropdownProps.id)}
            deleteEntryData={(entryIndex) => deleteEntryData(dropdownProps.id, entryIndex)}
            dropdownData={unsubmittedData[dropdownProps.id]}
            dropdownProps={dropdownProps}
            isOpen={openStatus[index]}
            submissionFlags={submissionFlags[dropdownProps.id]}
            toggleOpenStatus={() => toggleOpenStatus(index)}
            updateSubmissionFlags={(newFlagArray) =>
              updateSubmissionFlags(dropdownProps.id, newFlagArray)
            }
            updateSubmittedData={() => updateSubmittedData(dropdownProps.id)}
            updateUnsubmittedData={(newValue, entryIndex, inputFieldId) =>
              updateUnsubmittedData(newValue, dropdownProps.id, entryIndex, inputFieldId)
            }
          />
        ))}
        <button className="load-example-data" onClick={loadExampleData}>
          <FontAwesomeIcon icon="fa-file-import" /> Load Example Data
        </button>
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

const initSubmissionFlags = (unsubmittedData) => {
  const keyValuePairs = Object.entries(unsubmittedData).map(([dropdownId, entries]) => {
    return [dropdownId, Array(entries.length).fill(false)];
  });
  return Object.fromEntries(keyValuePairs);
};

export default App;
