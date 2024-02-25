import { useState } from 'react';
import { data } from './data';
import Dropdown from './Dropdown';
import CvPage from './CV';
import './App.css';
import './icons.js';

function App() {
  const [openStatus, setOpenStatus] = useState([true, false, false]);
  const [cvVals, setCvVals] = useState(
    data.reduce((cvValsAcc, section) => {
      const subsectionVals = section.formFields.reduce(
        (subsectionValsAcc, input) => ({ [input.id]: '', ...subsectionValsAcc }),
        {}
      );
      return { [section.id]: [subsectionVals], ...cvValsAcc };
    }, {})
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
      </div>
      <CvPage {...cvVals} />
    </>
  );
}

export default App;
