import PropTypes from 'prop-types';
import { textToArray } from './functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FormOutput({ handleEdit, sectionId, subsectionVals }) {
  let content;
  let dutyBullets;
  switch (sectionId) {
    case 'general':
      content = (
        <>
          <h3>
            {subsectionVals.firstName} {subsectionVals.lastName}
          </h3>
          <a href={`mailto: ${subsectionVals.email}`}>{subsectionVals.email}</a>
          <a href={`tel: ${subsectionVals.phone}`}>{subsectionVals.phone}</a>
          <p>{subsectionVals.location}</p>
        </>
      );
      break;

    case 'education':
      content = (
        <>
          <h3>{subsectionVals.schoolName}</h3>
          <p>{subsectionVals.location}</p>
          <p>{subsectionVals.degree}</p>
          <p>
            {subsectionVals.startDate} - {subsectionVals.endDate}
          </p>
        </>
      );
      break;

    case 'workExperience':
      dutyBullets = textToArray(subsectionVals.duties).map((duty, index) => (
        <li className="duty" key={index}>
          {duty}
        </li>
      ));

      content = (
        <>
          <h3>{subsectionVals.companyName}</h3>
          <p>{subsectionVals.location}</p>
          <p>{subsectionVals.jobTitle}</p>
          <p>
            {subsectionVals.startDate} - {subsectionVals.endDate}
          </p>
          <ul>{dutyBullets}</ul>
        </>
      );
      break;
  }

  return (
    <>
      <div className="section-content">{content}</div>
      <button onClick={handleEdit} className="edit-button">
        <FontAwesomeIcon icon="fa-pencil" />
      </button>
    </>
  );
}

FormOutput.propTypes = {
  handleEdit: PropTypes.func,
  sectionId: PropTypes.string,
  subsectionVals: PropTypes.object
};

export default FormOutput;
