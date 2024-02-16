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

  const deleteSubsection = (index) => {
    // CV needs index removed AND values cleaned so unsubmitted form values don't get pushed
    // However, sectionVals should preserve unsubmitted form data
    const newKeys = [...subsectionKeys.slice(0, index), ...subsectionKeys.slice(index + 1)];
    const newIsSubmitted = [...isSubmitted.slice(0, index), ...isSubmitted.slice(index + 1)];
    const newSectionVals = sectionVals.filter((values, i) => index !== i);
    const newCVVals = newSectionVals.map((values, i) =>
      newIsSubmitted[i] ? values : Object.fromEntries(Object.keys(values).map((key) => [key, '']))
    );
    setSectionVals(newSectionVals);
    setSubsectionKeys(newKeys);
    setIsSubmitted(newIsSubmitted);
    updateCvVals(newCVVals, id);
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
      handleDelete={() => deleteSubsection(index)}
      handleEdit={(e) => toggleSubmit(e, index, false)}
      handleSubmit={(e) => toggleSubmit(e, index, true)}
      index={index}
      initSubsectionVals={subsectionVals}
      isDeletable={sectionVals.length > 1}
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
