import PropTypes from 'prop-types';
import { formatDate, textToArray } from './functions';
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
          <p className="output-group">
            <FontAwesomeIcon icon={'fa-envelope'} className="fa-fw" />
            {subsectionVals.email}
          </p>
          <p className="output-group">
            <FontAwesomeIcon icon={'fa-phone'} className="fa-fw" />
            {subsectionVals.phone}
          </p>
          <p className="output-group">
            <FontAwesomeIcon icon={'fa-location-dot'} className="fa-fw" />
            {subsectionVals.location}
          </p>
        </>
      );
      break;

    case 'education':
      content = (
        <>
          <h3>{subsectionVals.schoolName}</h3>
          <p className="output-group">
            <FontAwesomeIcon icon="fa-graduation-cap" className="fa-fw" />
            {subsectionVals.degree}
          </p>
          <p className="output-group">
            <FontAwesomeIcon icon="fa-location-dot" className="fa-fw" />
            {subsectionVals.location}
          </p>
          <p className="output-group">
            <FontAwesomeIcon icon="fa-calendar-days" className="fa-fw" />
            {formatDate(subsectionVals.startDate)} - {formatDate(subsectionVals.endDate)}
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
          <h3>{subsectionVals.jobTitle}</h3>
          <p className="output-group">
            <FontAwesomeIcon icon="fa-building" className="fa-fw" />
            {subsectionVals.companyName}
          </p>
          <p className="output-group">
            <FontAwesomeIcon icon="fa-location-dot" className="fa-fw" />
            {subsectionVals.location}
          </p>
          <p className="output-group">
            <FontAwesomeIcon icon="fa-calendar-days" className="fa-fw" />
            {formatDate(subsectionVals.startDate)} - {formatDate(subsectionVals.endDate)}
          </p>
          <ul className="duty-list">{dutyBullets}</ul>
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
