import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Subsection from './Subsection';

function Dropdown({ formFields, id, initOpenStatus, initSectionVals, label, updateCvVals }) {
  const [isOpen, setIsOpen] = useState(initOpenStatus);
  const [sectionVals, setSectionVals] = useState(initSectionVals);
  const [isSubmitted, setIsSubmitted] = useState(new Array(sectionVals.length).fill(false));

  const updateSectionVals = (newSubsectionVals, subsectionIndex) => {
    const newSectionVals = [...sectionVals];
    newSectionVals[subsectionIndex] = newSubsectionVals;
    setSectionVals(newSectionVals);
    updateCvVals(newSectionVals, id);
  };

  console.log(id, isSubmitted);

  const addSubsection = () => {
    const newSubsection = formFields.reduce(
      (subsectionValsAcc, input) => ({ [input.id]: '', ...subsectionValsAcc }),
      {}
    );
    const newSectionVals = [...sectionVals, newSubsection];

    setSectionVals(newSectionVals);
    updateCvVals(newSectionVals, id);
    setIsSubmitted([...isSubmitted, false]);
  };

  const handleClick = () => setIsOpen(!isOpen);

  const toggleSubmit = (e, subsectionIndex) => {
    e.preventDefault();

    const newIsSubmitted = [...isSubmitted];
    newIsSubmitted[subsectionIndex] = !newIsSubmitted[subsectionIndex];
    setIsSubmitted(newIsSubmitted);
  };

  const content = isOpen
    ? sectionVals.map((subsectionVals, index) => (
        <Subsection
          key={`${id}${index}`}
          formFields={formFields}
          index={index}
          initSubsectionVals={subsectionVals}
          isSubmitted={isSubmitted[index]}
          sectionId={id}
          toggleSubmit={(e) => toggleSubmit(e, index)}
          updateSectionVals={updateSectionVals}
        />
      ))
    : null;

  const addButton = id !== 'general' ? <button onClick={addSubsection}>+ {label}</button> : null;

  return (
    <div className="dropdown-module">
      <div className="dropdown-header">
        <h2>{label}</h2>
        <button onClick={handleClick}>
          {isOpen ? <FontAwesomeIcon icon="angle-up" /> : <FontAwesomeIcon icon="angle-down" />}
        </button>
      </div>
      <>{content}</>
      <>{addButton}</>
    </div>
  );
}

Dropdown.propTypes = {
  formFields: PropTypes.array,
  id: PropTypes.string,
  initOpenStatus: PropTypes.bool,
  initSectionVals: PropTypes.array,
  label: PropTypes.string,
  updateCvVals: PropTypes.func
};

export default Dropdown;
