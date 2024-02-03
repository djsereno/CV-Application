import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from './Form';
import Section from './Section';

function Dropdown({ label, initOpenStatus, data }) {
  const [isOpen, setIsOpen] = useState(initOpenStatus);

  const handleClick = () => setIsOpen(!isOpen);

  // const inputForm = <Form key={`${label} Form`} {...data} />;

  return (
    <div className="dropdown-module">
      <div className="dropdown-header">
        <h2>{label}</h2>
        <button onClick={handleClick}>
          {isOpen ? <FontAwesomeIcon icon="angle-up" /> : <FontAwesomeIcon icon="angle-down" />}
        </button>
      </div>
      <>{isOpen ? <Section key={`${label} Section`} data={data} /> : null}</>
    </div>
  );
}

export default Dropdown;
