import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from './Form';

function Dropdown({ label, initOpenStatus, data }) {
  const [isOpen, setIsOpen] = useState(initOpenStatus);

  const handleClick = () => setIsOpen(!isOpen);

  const inputForm = <Form key={`${label} Form`} {...data} />;

  return (
    <div className="dropdown-module">
      <div className="dropdown-header">
        <h2>{label}</h2>
        <button onClick={handleClick}>
          {isOpen ? <FontAwesomeIcon icon="angle-up" /> : <FontAwesomeIcon icon="angle-down" />}
        </button>
      </div>
      <>{isOpen ? inputForm : null}</>
    </div>
  );
}

export default Dropdown;
