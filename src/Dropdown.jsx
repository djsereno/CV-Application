import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Subsection from './Subsection';

function Dropdown({ label, initOpenStatus, data }) {
  const [isOpen, setIsOpen] = useState(initOpenStatus);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown-module">
      <div className="dropdown-header">
        <h2>{label}</h2>
        <button onClick={handleClick}>
          {isOpen ? <FontAwesomeIcon icon="angle-up" /> : <FontAwesomeIcon icon="angle-down" />}
        </button>
      </div>
      <>{isOpen ? <Subsection key={`${label} Section`} data={data} /> : null}</>
    </div>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string,
  initOpenStatus: PropTypes.bool,
  data: PropTypes.array
};

export default Dropdown;
