import { useState } from 'react';
import { formProperties } from './formProperties';
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
  const [submittedData, setSubmittedData] = useState(createDataStructure(formProperties));
  const [ubsubmittedData, setUnsubmittedData] = useState(createDataStructure(formProperties));

  const updateCvVals = (newSectionVals, sectionId) => {
    const newCvVals = { ...submittedData };
    newCvVals[sectionId] = newSectionVals;
    setSubmittedData(newCvVals);
  };

  const updateUnsubmittedData = (newValue, inputFieldId, entryIndex, dropdownID) => {
    const newUnsubmittedData = { ...ubsubmittedData };
    newUnsubmittedData[dropdownID][entryIndex][inputFieldId] = newValue;
    setUnsubmittedData(newUnsubmittedData);
    console.log(JSON.stringify(newUnsubmittedData, null, 2));
  };

  const toggleOpenStatus = (index) => {
    const newOpenStatus = new Array(3).fill(false);
    newOpenStatus[index] = !openStatus[index];
    setOpenStatus(newOpenStatus);
  };

  const loadExampleData = () => {
    for (const [key, value] of Object.entries(exampleData)) {
      updateCvVals(value, key);
    }
  };

  return (
    <>
      <div id="dropdown-container">
        {formProperties.map((dropdown, index) => (
          <Dropdown
            key={dropdown.id}
            initSectionVals={ubsubmittedData[dropdown.id]}
            isOpen={openStatus[index]}
            toggleOpenStatus={() => toggleOpenStatus(index)}
            updateCvVals={updateCvVals}
            updateUnsubmittedData={(newValue, inputFieldId, entryIndex) =>
              updateUnsubmittedData(newValue, inputFieldId, entryIndex, dropdown.id)
            }
            {...dropdown}
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

const createDataStructure = (data) => {
  // Creates a blank data structure to store the form data.
  // Example: {general: [{data}],
  //           education: [{ school1 }, { school2 }, ...],
  //           workExperience: [{ job1 }, { job2 }, ...]}
  const dataStructure = data.map((section) => {
    const keyValuePairs = section.formFields.map((inputField) => [inputField.id, '']);
    const formFields = Object.fromEntries(keyValuePairs);
    return [section.id, [formFields]];
  });

  return Object.fromEntries(dataStructure);
};

export default App;
