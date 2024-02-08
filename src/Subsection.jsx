import { useState } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import FormOutput from './FormOutput';

function Subsection({
  dropdownId,
  formFields,
  data,
  updateSectionVals,
  index,
  isSubmitted,
  toggleSubmit
}) {
  // const [inputVals, setInputVals] = useState(data);

  const [formVals, setFormVals] = useState(data);

  const updateFormVals = (newInputVal, inputId) => {
    const newFormVals = { ...data };
    // DEBUG
    newFormVals[inputId] = `${newInputVal}z`;
    // DEBUG
    setFormVals(newFormVals);
    updateSectionVals(newFormVals, index);
  };

  return (
    <>
      {isSubmitted ? (
        <FormOutput dropdownId={dropdownId} formVals={formVals} handleEdit={toggleSubmit} />
      ) : (
        <FormInput
          formFields={formFields}
          formVals={formVals}
          updateFormVals={updateFormVals}
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
