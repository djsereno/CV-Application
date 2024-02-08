import { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { data } from './data';
import Dropdown from './Dropdown';

library.add(faAngleDown, faAngleUp);

function App() {
  const initialCvVals = data.reduce((cvValsAcc, section) => {
    const subsectionVals = section.formFields.reduce(
      (subsectionValsAcc, input) => ({ [input.id]: input.placeholder, ...subsectionValsAcc }),
      {}
    );
    return { [section.id]: [subsectionVals], ...cvValsAcc };
  }, {});

  const [cvVals, setCvVals] = useState(initialCvVals);

  const updateCvVals = (newSectionVals, sectionId) => {
    const newCvVals = { ...cvVals };
    newCvVals[sectionId] = newSectionVals;
    setCvVals(newCvVals);
  };

  return (
    <>
      <div id="dropdown-container">
        {data.map((section) => (
          <Dropdown
            key={section.id}
            initOpenStatus={false}
            initSectionVals={cvVals[section.id]}
            updateCvVals={updateCvVals}
            {...section}
          />
        ))}
      </div>
      <div id="cv-container">
        <pre>{JSON.stringify(cvVals, null, 2)}</pre>
      </div>
    </>
  );
}

export default App;
