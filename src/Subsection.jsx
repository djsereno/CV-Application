import { useState } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import FormOutput from './FormOutput';

function Subsection({
  formFields,
  index,
  initSubsectionVals,
  isSubmitted,
  sectionId,
  toggleSubmit,
  updateSectionVals
}) {
  const [subsectionVals, setSubsectionVals] = useState(initSubsectionVals);

  const updateSubsectionVals = (newInputVal, inputId) => {
    const newSubsectionVals = { ...subsectionVals };
    newSubsectionVals[inputId] = newInputVal;
    setSubsectionVals(newSubsectionVals);
    updateSectionVals(newSubsectionVals, index);
  };

  return (
    <>
      {isSubmitted ? (
        <FormOutput
          handleEdit={toggleSubmit}
          sectionId={sectionId}
          subsectionVals={subsectionVals}
        />
      ) : (
        <FormInput
          formFields={formFields}
          handleSubmit={toggleSubmit}
          subsectionVals={subsectionVals}
          updateSubsectionVals={updateSubsectionVals}
        />
      )}
    </>
  );
}

Subsection.propTypes = {
  formFields: PropTypes.array,
  index: PropTypes.number,
  initSubsectionVals: PropTypes.object,
  isSubmitted: PropTypes.bool,
  sectionId: PropTypes.string,
  toggleSubmit: PropTypes.func,
  updateSectionVals: PropTypes.func
};

export default Subsection;
