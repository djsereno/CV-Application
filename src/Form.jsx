/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css';
import Input from './Input';
import OutputGeneral from './Outputs';

function Form({ id, heading, inputs }) {
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

  const inputFields = inputs.map((input, index) => (
    <Input
      key={input.label}
      isSubmitted={isSubmitted}
      onChange={(e) => handleChange(e.target.value, index)}
      value={inputVals[index]}
      {...input}
    />
  ));

  const outputFields = inputs.reduce((acc, input) => ({ ...acc, [input.id]: input.label }), {});
  const outputComp = <OutputGeneral key={`${heading}Output`} {...outputFields} />;

  const content = isSubmitted ? (
    outputComp
  ) : (
    <form id={id} className="section-form" onSubmit={handleSubmit}>
      {outputinputFieldsComp}
      <button type="submit" form={id}>
        Submit
      </button>
    </form>
  );

  return <div className="dropdown-section">{content}</div>;
}

export default Form;
