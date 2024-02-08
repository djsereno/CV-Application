import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Subsection from './Subsection';

function Dropdown({ formFields, id, initOpenStatus, initSectionVals, label, updateCvVals }) {
  const [isOpen, setIsOpen] = useState(initOpenStatus);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sectionVals, setSectionVals] = useState(initSectionVals);

  const updateSectionVals = (newSubsectionVals, subsectionIndex) => {
    const newSectionVals = [...sectionVals];
    newSectionVals[subsectionIndex] = newSubsectionVals;
    setSectionVals(newSectionVals);
    updateCvVals(newSectionVals, id);
  };

  const handleClick = () => setIsOpen(!isOpen);

  const toggleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(!isSubmitted);
  };

  const content = isOpen
    ? sectionVals.map((subsectionVals, index) => (
        <Subsection
          key={`${id}${index}`}
          formFields={formFields}
          index={index}
          initSubsectionVals={subsectionVals}
          isSubmitted={isSubmitted}
          sectionId={id}
          toggleSubmit={toggleSubmit}
          updateSectionVals={updateSectionVals}
        />
      ))
    : null;

  return (
    <div className="dropdown-module">
      <div className="dropdown-header">
        <h2>{label}</h2>
        <button onClick={handleClick}>
          {isOpen ? <FontAwesomeIcon icon="angle-up" /> : <FontAwesomeIcon icon="angle-down" />}
        </button>
      </div>
      <>{content}</>
      {id !== 'general' ? <button>+ {label}</button> : null}
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
