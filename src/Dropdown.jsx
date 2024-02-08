import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Subsection from './Subsection';

function Dropdown({ id, label, initOpenStatus, data }) {
  const [isOpen, setIsOpen] = useState(initOpenStatus);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  const toggleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(!isSubmitted);
  };

  const content = isOpen
    ? data.map((subsectionData, index) => (
        <Subsection
          key={`${id}${index}`}
          dropdownId={id}
          data={subsectionData}
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
    </div>
  );
}

Dropdown.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  initOpenStatus: PropTypes.bool,
  data: PropTypes.array
};

export default Dropdown;
