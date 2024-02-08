import { useState } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import FormOutput from './FormOutput';

function Subsection({ sectionId, data, isSubmitted, toggleSubmit }) {
  const [inputs, setInputs] = useState(data);

  const handleChange = (newValue, index) => {
    const newInputs = [...inputs];
    newInputs[index].value = newValue;
    setInputs(newInputs);
  };

  return (
    <>
      {isSubmitted ? (
        <FormOutput key={sectionId} sectionId={sectionId} data={data} handleEdit={toggleSubmit} />
      ) : (
        <FormInput
          key={sectionId}
          data={data}
          handleChange={handleChange}
          handleSubmit={toggleSubmit}
        />
      )}
    </>
  );
}

Subsection.propTypes = {
  sectionId: PropTypes.string,
  data: PropTypes.array,
  isSubmitted: PropTypes.bool,
  toggleSubmit: PropTypes.func
};

export default Subsection;
