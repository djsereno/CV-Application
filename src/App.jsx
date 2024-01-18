/* eslint-disable react/prop-types */
import { useState } from 'react';
import { data } from './data';
import './App.css';

function Input({ label, placeholder, type }) {
  let inputField;
  type === 'textarea'
    ? (inputField = <textarea placeholder={placeholder} required></textarea>)
    : (inputField = <input type={type} placeholder={placeholder} required></input>);

  return (
    <label>
      {`${label}: `}
      {inputField}
    </label>
  );
}

function Section({ section }) {
  const { id, heading, inputs } = section;
  const inputsFields = inputs.map((input) => (
    <Input
      key={input.label}
      label={input.label}
      placeholder={input.placeholder}
      type={input.type}
    />
  ));

  return (
    <section id={id}>
      <h2>{heading}</h2>
      <form>
        {inputsFields}
        <button type="button">{section.isSubmitted ? 'Edit' : 'Submit'}</button>
      </form>
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
