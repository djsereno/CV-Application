/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css';
import Input from './Input';

function Section({ id, heading, inputs }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inputVals, setInputVals] = useState(Array(inputs.length).fill(''));

  const handleChange = (value, index) => {
    const newInputVals = [...inputVals];
    newInputVals[index] = value;
    setInputVals(newInputVals);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(!isSubmitted);
  };

  const inputsFields = inputs.map((input, index) => (
    <Input
      key={input.label}
      isSubmitted={isSubmitted}
      onChange={(e) => handleChange(e.target.value, index)}
      value={inputVals[index]}
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

export default Section;
