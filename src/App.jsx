/* eslint-disable react/prop-types */
import { useState } from 'react';
import { data } from './data';
import './App.css';

function Input({ label, value }) {
  return (
    <label>
      {`${label} : `}
      <input type="text" value={value} readOnly></input>
    </label>
  );
}

function Section({ section }) {
  const { id, heading, inputs } = section;
  const inputsFields = inputs.map((input) => <Input key={input.label} label={input.label} value={input.value} />);

  return (
    <section id={id}>
      <h2>{heading}</h2>
      {inputsFields}
      <button type="button">{section.isSubmitted ? 'Edit' : 'Submit'}</button>
    </section>
  );
}

function App() {
  return (
    <>
      {data.map((section) => (
        <Section key={section.heading} section={section} />
      ))}
    </>
  );
}

export default App;
