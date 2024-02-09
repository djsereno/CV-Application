import PropTypes from 'prop-types';
import './App.css';

function FormOutput({ handleEdit, sectionId, subsectionVals }) {
  let content;
  switch (sectionId) {
    case 'general':
      content = (
        <div>
          <h3>
            {subsectionVals.firstName} {subsectionVals.lastName}
          </h3>
          <a href={`mailto: ${subsectionVals.email}`}>{subsectionVals.email}</a>
          <a href={`tel: ${subsectionVals.phone}`}>{subsectionVals.phone}</a>
          <p>{subsectionVals.location}</p>
        </div>
      );
      break;

    case 'education':
      content = (
        <div>
          <h3>{subsectionVals.schoolName}</h3>
          <p>{subsectionVals.location}</p>
          <p>{subsectionVals.degree}</p>
          <p>
            {subsectionVals.startDate} - {subsectionVals.endDate}
          </p>
        </div>
      );
      break;

    case 'workExperience':
      content = (
        <div>
          <h3>{subsectionVals.companyName}</h3>
          <p>{subsectionVals.location}</p>
          <p>{subsectionVals.jobTitle}</p>
          <p>
            {subsectionVals.startDate} - {subsectionVals.endDate}
          </p>
          <p>{subsectionVals.duties}</p>
        </div>
      );
      break;
  }

  return (
    <div className="section-output">
      {content}
      <button type="submit" onClick={handleEdit}>
        Edit
      </button>
      <button type="button">Delete</button>
    </div>
  );
}

FormOutput.propTypes = {
  handleEdit: PropTypes.func,
  sectionId: PropTypes.string,
  subsectionVals: PropTypes.object
};

export default FormOutput;
