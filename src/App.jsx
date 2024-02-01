/* eslint-disable react/prop-types */
import { useState } from 'react';
import { data } from './data';
import './App.css';
import Section from './Section';
import Dropdown from './Dropdown';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleDown, faAngleUp);

function App() {
  return (
    <>
      <div id="dropdown-container">
        {data.map((section) => (
          <Dropdown
            key={`${section.label} Dropdown`}
            label={section.label}
            initOpenStatus={false}
            sectionData={section}
          />
        ))}
      </div>
      <div id="cv-container">
        Preview goes here
      </div>
    </>
  );
}

export default App;
