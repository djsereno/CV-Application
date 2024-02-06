import { useState } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import FormOutput from './FormOutput';

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
        <FormOutput key={`${data.label} Output`} data={data} handleEdit={toggleSubmit} />
      ) : (
        <FormInput
          key={`${data.label} Form`}
          data={data}
          handleChange={handleChange}
          handleSubmit={toggleSubmit}
        />
      )}
    </>
  );
}

Subsection.propTypes = {
  data: PropTypes.array
};

export default Subsection;
