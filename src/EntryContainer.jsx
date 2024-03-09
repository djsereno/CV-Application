import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import PropTypes from 'prop-types';
import EntryForm from './EntryForm';
import EntryOutput from './EntryOutput';

function EntryContainer({
  formFields,
  handleDelete,
  handleEdit,
  handleSubmit,
  id,
  index,
  initSubsectionVals,
  isDeletable,
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
    <div className="subsection-container">
      {isSubmitted ? (
        <EntryOutput
          handleEdit={handleEdit}
          sectionId={sectionId}
          subsectionVals={subsectionVals}
        />
      ) : (
        <EntryForm
          formFields={formFields}
          handleSubmit={handleSubmit}
          id={id}
          subsectionVals={subsectionVals}
          updateSubsectionVals={updateSubsectionVals}
        />
      )}
      {isDeletable ? (
        <button onClick={handleDelete} className="delete-button">
          <FontAwesomeIcon icon="fa-trash-can" /> {isSubmitted ? null : ' Delete'}
        </button>
      ) : null}
    </div>
  );
}

EntryContainer.propTypes = {
  formFields: PropTypes.array,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
  handleSubmit: PropTypes.func,
  id: PropTypes.string,
  index: PropTypes.number,
  initSubsectionVals: PropTypes.object,
  isDeletable: PropTypes.bool,
  isSubmitted: PropTypes.bool,
  sectionId: PropTypes.string,
  updateSectionVals: PropTypes.func
};

export default EntryContainer;
