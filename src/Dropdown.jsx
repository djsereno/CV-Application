import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from './Section';

function Dropdown({ label, initOpenStatus, sectionData }) {
  const [isOpen, setIsOpen] = useState(initOpenStatus);

  const handleClick = () => setIsOpen(!isOpen);

  const content = <Section key={sectionData.id} {...sectionData} />;

  return (
    <div className="dropdown-module">
      <div className="dropdown-header">
        <h2>{label}</h2>
        <button onClick={handleClick}>
          {isOpen ? <FontAwesomeIcon icon="angle-up" /> : <FontAwesomeIcon icon="angle-down" />}
        </button>
      </div>
      <>{isOpen ? content : null}</>
    </div>
  );
}

export default Dropdown;
