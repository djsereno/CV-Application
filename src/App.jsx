import { useState } from 'react';
import { data } from './data';
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
  const [cvVals, setCvVals] = useState(
    // data.reduce((cvValsAcc, section) => {
    //   const subsectionVals = section.formFields.reduce(
    //     (subsectionValsAcc, input) => ({ [input.id]: '', ...subsectionValsAcc }),
    //     {}
    //   );
    //   return { [section.id]: [subsectionVals], ...cvValsAcc };
    // }, {})
    exampleData
  );

  const updateCvVals = (newSectionVals, sectionId) => {
    const newCvVals = { ...cvVals };
    newCvVals[sectionId] = newSectionVals;
    setCvVals(newCvVals);
  };

  const toggleOpenStatus = (index) => {
    const newOpenStatus = new Array(3).fill(false);
    newOpenStatus[index] = !openStatus[index];
    setOpenStatus(newOpenStatus);
  };

  const loadExampleData = () => {
    console.log(cvVals);
    for (const [key, value] of Object.entries(exampleData)) {
      console.log(key);
      updateCvVals(value, key);
    }
  };

  return (
    <>
      <div id="dropdown-container">
        {data.map((section, index) => (
          <Dropdown
            key={section.id}
            initSectionVals={cvVals[section.id]}
            isOpen={openStatus[index]}
            toggleOpenStatus={() => toggleOpenStatus(index)}
            updateCvVals={updateCvVals}
            {...section}
          />
        ))}
        <button className="load-example-data" onClick={loadExampleData}>
          <FontAwesomeIcon icon="fa-file-import" /> Load Example Data
        </button>
      </div>
      <CvPage {...cvVals} />
    </>
  );
}

export default App;
