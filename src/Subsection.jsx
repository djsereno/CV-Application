import { useState } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import FormOutput from './FormOutput';

function Subsection({ dropdownId, formFields, data, handleChange, isSubmitted, toggleSubmit }) {
  const [inputs, setInputs] = useState(data);

  return (
    <>
      {isSubmitted ? (
        <FormOutput dropdownId={dropdownId} data={data} handleEdit={toggleSubmit} />
      ) : (
        <FormInput
          formFields={formFields}
          data={data}
          handleChange={handleChange}
          handleSubmit={toggleSubmit}
        />
      )}
    </>
  );
}

Subsection.propTypes = {
  dropdownId: PropTypes.string,
  formFields: PropTypes.array,
  data: PropTypes.object,
  handleChange: PropTypes.func,
  isSubmitted: PropTypes.bool,
  toggleSubmit: PropTypes.func
};

export default Subsection;
