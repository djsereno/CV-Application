import { useState } from 'react';
import './App.css';
import PropTypes from 'prop-types';

const sections = [
  {
    id: 0,
    heading: 'General',
    inputLabels: ['First Name', 'Last Name', 'Email', 'Phone', 'Location'],
  },
  {
    id: 1,
    heading: 'Education',
    inputLabels: ['School Name', 'Location', 'Degree', 'Start Date', 'End Date'],
  },
  {
    id: 2,
    heading: 'Work Experience',
    inputLabels: ['Company Name', 'Location', 'Position', 'Start Date', 'End Date', 'Responsibilities'],
  },
];

function Input({ label }) {
  return (
    <label>
      {`${label} : `}
      <input type="text"></input>
    </label>
  );
}
Input.propTypes = {
  label: PropTypes.string.isRequired,
};

function Section({ section }) {
  const { id, heading, inputLabels } = section;
  const inputs = inputLabels.map((label) => <Input label={label} />);

  return (
    <section id={id}>
      <h2>{heading}</h2>
      {inputs}
    </section>
  );
}

function App() {
  const sectionComps = sections.map((section) => <Section section={section} />);
  return <>{sectionComps}</>;
}

export default App;
