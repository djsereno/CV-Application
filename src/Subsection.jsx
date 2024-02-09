import { useState } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import FormOutput from './FormOutput';

function Subsection({
  formFields,
  handleEdit,
  handleSubmit,
  index,
  initSubsectionVals,
  isSubmitted,
  sectionId,
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
        <FormOutput handleEdit={handleEdit} sectionId={sectionId} subsectionVals={subsectionVals} />
      ) : (
        <FormInput
          formFields={formFields}
          handleSubmit={handleSubmit}
          subsectionVals={subsectionVals}
          updateSubsectionVals={updateSubsectionVals}
        />
      )}
      {subsectionVals.length > 0 ? <button>Delete</button> : null}
    </>
  );
}

Subsection.propTypes = {
  formFields: PropTypes.array,
  handleEdit: PropTypes.func,
  handleSubmit: PropTypes.func,
  index: PropTypes.number,
  initSubsectionVals: PropTypes.object,
  isSubmitted: PropTypes.bool,
  sectionId: PropTypes.string,
  updateSectionVals: PropTypes.func
};

export default Subsection;
