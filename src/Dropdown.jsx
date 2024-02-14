import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Subsection from './Subsection';

function Dropdown({
  formFields,
  id,
  initSectionVals,
  isOpen,
  label,
  toggleOpenStatus,
  updateCvVals
}) {
  const [sectionVals, setSectionVals] = useState(initSectionVals);
  const [isSubmitted, setIsSubmitted] = useState(new Array(sectionVals.length).fill(false));
  const [subsectionKeys, setSubsectionKeys] = useState(sectionVals.map(() => uuidv4()));

  const updateSectionVals = (newSubsectionVals, subsectionIndex) => {
    const newSectionVals = [...sectionVals];
    newSectionVals[subsectionIndex] = newSubsectionVals;
    setSectionVals(newSectionVals);
  };

  const addSubsection = () => {
    if (isSubmitted.some((value) => value === false)) return false;

    const newSubsection = formFields.reduce(
      (subsectionValsAcc, input) => ({ [input.id]: '', ...subsectionValsAcc }),
      {}
    );
    const newSectionVals = [...sectionVals, newSubsection];

    setSectionVals(newSectionVals);
    setSubsectionKeys([...subsectionKeys, uuidv4()]);
    setIsSubmitted([...isSubmitted, false]);
  };

  const toggleSubmit = (e, subsectionIndex, isSubmit) => {
    e.preventDefault();
    const newIsSubmitted = [...isSubmitted];
    newIsSubmitted[subsectionIndex] = !newIsSubmitted[subsectionIndex];
    setIsSubmitted(newIsSubmitted);
    if (isSubmit) updateCvVals(sectionVals, id);
  };

  const content = sectionVals.map((subsectionVals, index) => (
    <Subsection
      key={subsectionKeys[index]}
      formFields={formFields}
      handleEdit={(e) => toggleSubmit(e, index, false)}
      handleSubmit={(e) => toggleSubmit(e, index, true)}
      index={index}
      initSubsectionVals={subsectionVals}
      isSubmitted={isSubmitted[index]}
      sectionId={id}
      updateSectionVals={updateSectionVals}
    />
  ));

  const addButton = id !== 'general' ? <button onClick={addSubsection}>+ {label}</button> : null;

  return (
    <div className="dropdown-module">
      <div className="dropdown-header">
        <h2>{label}</h2>
        <button onClick={toggleOpenStatus}>
          {isOpen ? <FontAwesomeIcon icon="angle-up" /> : <FontAwesomeIcon icon="angle-down" />}
        </button>
      </div>
      {isOpen ? (
        <div>
          {content}
          {addButton}
        </div>
      ) : null}
    </div>
  );
}

Dropdown.propTypes = {
  formFields: PropTypes.array,
  id: PropTypes.string,
  initSectionVals: PropTypes.array,
  isOpen: PropTypes.bool,
  label: PropTypes.string,
  toggleOpenStatus: PropTypes.func,
  updateCvVals: PropTypes.func
};

export default Dropdown;
