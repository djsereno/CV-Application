import { useState } from 'react';
import { data } from './data';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './Dropdown';

library.add(faAngleDown, faAngleUp);

function App() {
  const [formVals, setFormVals] = useState(
    data.reduce((formValsAcc, section) => {
      const subsectionVals = section.formFields.reduce(
        (subsectionValsAcc, input) => ({ [input.id]: input.placeholder, ...subsectionValsAcc }),
        {}
      );
      return { [section.id]: [subsectionVals], ...formValsAcc };
    }, {})
  );

  console.log(formVals);

  const updateCVData = (newSectionData, sectionId) => {
    const newCVData = { ...formVals };
    newCVData[sectionId] = newSectionData;
    setFormVals(newCVData);
  };

  return (
    <>
      <div id="dropdown-container">
        {data.map((section) => (
          <Dropdown
            key={section.id}
            initOpenStatus={false}
            updateCVData={updateCVData}
            sectionData={formVals[section.id]}
            {...section}
          />
        ))}
      </div>
      <div id="cv-container">
        <pre>{JSON.stringify(formVals, null, 2)}</pre>
      </div>
    </>
  );
}

export default App;
