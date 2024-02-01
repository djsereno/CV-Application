import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Dropdown({ label, initOpenStatus }) {
  const [isOpen, setIsOpen] = useState(initOpenStatus);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div>
      <h2>{label}</h2>
      <button onClick={handleClick}>
        {isOpen ? (
          <FontAwesomeIcon icon="angle-up" />
        ) : (
          <FontAwesomeIcon icon="angle-down" />
        )}
      </button>
    </div>
  );
}

export default Dropdown;
