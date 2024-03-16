import PropTypes from 'prop-types';
import { formatDate, textToArray, formatPhoneNumber } from './functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function EntryOutput({ dropdownId, entryData, handleDelete, handleEdit, isDeletable }) {
  let content;
  let dutyBullets;
  switch (dropdownId) {
    case 'general':
      content = (
        <>
          <h3>
            {entryData.firstName} {entryData.lastName}
          </h3>
          <p className="output-group">
            <FontAwesomeIcon icon={'fa-envelope'} className="fa-fw" />
            {entryData.email}
          </p>
          <p className="output-group">
            <FontAwesomeIcon icon={'fa-phone'} className="fa-fw" />
            {formatPhoneNumber(entryData.phone)}
          </p>
          <p className="output-group">
            <FontAwesomeIcon icon={'fa-location-dot'} className="fa-fw" />
            {entryData.location}
          </p>
        </>
      );
      break;

    case 'education':
      content = (
        <>
          <h3>{entryData.schoolName}</h3>
          <p className="output-group">
            <FontAwesomeIcon icon="fa-graduation-cap" className="fa-fw" />
            {entryData.degree}
          </p>
          <p className="output-group">
            <FontAwesomeIcon icon="fa-location-dot" className="fa-fw" />
            {entryData.location}
          </p>
          <p className="output-group">
            <FontAwesomeIcon icon="fa-calendar-days" className="fa-fw" />
            {formatDate(entryData.startDate)} - {formatDate(entryData.endDate)}
          </p>
        </>
      );
      break;

    case 'workExperience':
      dutyBullets = textToArray(entryData.duties).map((duty, index) => (
        <li className="duty" key={index}>
          {duty}
        </li>
      ));

      content = (
        <>
          <h3>{entryData.jobTitle}</h3>
          <p className="output-group">
            <FontAwesomeIcon icon="fa-building" className="fa-fw" />
            {entryData.companyName}
          </p>
          <p className="output-group">
            <FontAwesomeIcon icon="fa-location-dot" className="fa-fw" />
            {entryData.location}
          </p>
          <p className="output-group">
            <FontAwesomeIcon icon="fa-calendar-days" className="fa-fw" />
            {formatDate(entryData.startDate)} - {formatDate(entryData.endDate)}
          </p>
          {/* <ul className="duty-list">{dutyBullets}</ul> */}
        </>
      );
      break;
  }

  return (
    <>
      <div className="subsection-main-details">
        <div className="section-content">{content}</div>
        <div className="output-button-group">
          <button onClick={handleEdit} className="edit-button">
            <FontAwesomeIcon icon="fa-pencil" />
          </button>
          {isDeletable ? (
            <button onClick={handleDelete} className="delete-button">
              <FontAwesomeIcon icon="fa-trash-can" />
            </button>
          ) : null}
        </div>
      </div>
      <ul className="duty-list">{dutyBullets}</ul>
    </>
  );
}

EntryOutput.propTypes = {
  dropdownId: PropTypes.string,
  entryData: PropTypes.object,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
  isDeletable: PropTypes.bool
};

export default EntryOutput;
