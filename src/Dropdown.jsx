import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Subsection from './Subsection';

function Dropdown({ id, label, initOpenStatus, updateCVData, sectionData, formFields }) {
  const [isOpen, setIsOpen] = useState(initOpenStatus);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sectionVals, setSectionVals] = useState(sectionData);

  const updateSectionVals = (newSubsectionVals, subsectionIndex) => {
    const newSectionVals = [...sectionVals];
    newSectionVals[subsectionIndex] = newSubsectionVals;
    setSectionVals(newSectionVals);
    updateCVData(newSectionVals, id);
  };

  const handleClick = () => setIsOpen(!isOpen);

  // const handleChange = (newValue, inputId, subsectionIndex) => {
  //   const newData = [...subsectionData];
  //   newData[subsectionIndex][inputId] = newValue;
  //   setSubsectionData(newData);
  // };

  const toggleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(!isSubmitted);
  };

  // const addSubsection = () => {

  // }

  const content = isOpen
    ? sectionVals.map((subsectionData, index) => (
        <Subsection
          key={`${id}${index}`}
          dropdownId={id}
          formFields={formFields}
          data={subsectionData}
          updateSectionVals={updateSectionVals}
          index={index}
          isSubmitted={isSubmitted}
          toggleSubmit={toggleSubmit}
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
  id: PropTypes.string,
  label: PropTypes.string,
  initOpenStatus: PropTypes.bool,
  updateSectionData: PropTypes.func,
  sectionData: PropTypes.array,
  formFields: PropTypes.array
};

export default Dropdown;
