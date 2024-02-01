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
      <Dropdown key={'test'} label="Test Dropdown" initOpenStatus={true} />
      {data.map((section) => (
        <Section key={section.heading} {...section} />
      ))}
    </>
  );
}

export default App;
