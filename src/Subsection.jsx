import { useState } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';

function Subsection({ data }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inputs, setInputs] = useState(data);

  const handleChange = (newValue, index) => {
    const newInputs = [...inputs];
    newInputs[index].value = newValue;
    setInputs(newInputs);
  };

  const toggleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(!isSubmitted);
  };

  return (
    <>
      {isSubmitted ? (
        'edit'
      ) : (
        <FormInput
          key={`${data.label} Form`}
          data={data}
          handleChange={handleChange}
          toggleSubmit={toggleSubmit}
        />
      )}
    </>
  );
}

Subsection.propTypes = {
  data: PropTypes.array
};

export default Subsection;
