/* eslint-disable react/prop-types */
import { useState } from 'react';
import { data } from './data';
import './App.css';

function Input({ label, placeholder, type, value, isSubmitted, onChange }) {
  const inputField =
    type === 'textarea' ? (
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        readOnly={isSubmitted}
        required></textarea>
    ) : (
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        readOnly={isSubmitted}
        required></input>
    );

  return (
    <label>
      {`${label}: `}
      {inputField}
    </label>
  );
}

function Section({ id, heading, inputs }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inputVals, setInputVals] = useState(
    inputs.reduce((obj, input) => ({ ...obj, [input.label]: input.value }), {})
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(!isSubmitted);
  };

  const handleChange = (e, label) => {
    const newInputVals = inputVals;
    newInputVals[label] = e.target.value;
    setInputVals(newInputVals);
  };

  const inputsFields = inputs.map((input) => (
    <Input
      key={input.label}
      isSubmitted={isSubmitted}
      onChange={(e) => handleChange(e, input.label)}
      value={inputVals[input.label]}
      {...input}
    />
  ));

  return (
    <section id={id}>
      <h2>{heading}</h2>
      <form onSubmit={handleSubmit}>
        {isSubmitted ? null : inputsFields}
        <button type="submit">{isSubmitted ? 'Edit' : 'Submit'}</button>
      </form>
      <button>Previous Section</button>
      <button>Next Section</button>
    </section>
  );
}

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
