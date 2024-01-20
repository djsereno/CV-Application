/* eslint-disable react/prop-types */
import { useState } from 'react';
import { data } from './data';
import './App.css';

function Input({ label, placeholder, type, isSubmitted }) {
  const inputField =
    type === 'textarea' ? (
      <textarea placeholder={placeholder} readOnly={isSubmitted} required rea></textarea>
    ) : (
      <input type={type} placeholder={placeholder} readOnly={isSubmitted} required></input>
    );

  return (
    <label>
      {`${label}: `}
      {inputField}
    </label>
  );
}

function Section({ section }) {
  const { id, heading, inputs } = section;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(!isSubmitted);
  };

  const inputsFields = inputs.map((input) => (
    <Input
      key={input.label}
      label={input.label}
      placeholder={input.placeholder}
      type={input.type}
      isSubmitted={isSubmitted}
    />
  ));

  return (
    <section id={id}>
      <h2>{heading}</h2>
      <form onSubmit={handleSubmit}>
        {inputsFields}
        <button type="submit">{isSubmitted ? 'Edit' : 'Submit'}</button>
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
