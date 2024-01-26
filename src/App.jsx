/* eslint-disable react/prop-types */
import { useState } from 'react';
import { data } from './data';
import './App.css';
import Section from './Section';

function App() {
  return (
    <>
      {data.map((section) => (
        <Section key={section.heading} {...section} />
      ))}
    </>
  );
}

export default App;
