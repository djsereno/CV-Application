import PropTypes from 'prop-types';
import { formatDate, textToArray, formatPhoneNumber } from './functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

function EntryOutput({ dropdownId, entryData, handleDelete, handleEdit }) {
  const [detailsShown, setDetailsShown] = useState(false);

  const toggleDetails = () => {
    if (dropdownId !== 'workExperience') return null;
    setDetailsShown(!detailsShown);
  };

  let content;
  let dutyBullets;
  switch (dropdownId) {
    case 'general':
      content = (
        <>
          <h3>
            {entryData.firstName} {entryData.lastName}
          </h3>
          <p className="entry__content-item">
            <FontAwesomeIcon icon={'fa-envelope'} className="fa-fw" />
            {entryData.email}
          </p>
          <p className="entry__content-item">
            <FontAwesomeIcon icon={'fa-phone'} className="fa-fw" />
            {formatPhoneNumber(entryData.phone)}
          </p>
          <p className="entry__content-item">
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
          <p className="entry__content-item">
            <FontAwesomeIcon icon="fa-graduation-cap" className="fa-fw" />
            {entryData.degree}
          </p>
          <p className="entry__content-item">
            <FontAwesomeIcon icon="fa-location-dot" className="fa-fw" />
            {entryData.location}
          </p>
          <p className="entry__content-item">
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
          <h3>{entryData.companyName}</h3>
          <p className="entry__content-item">
            <FontAwesomeIcon icon="fa-id-badge" className="fa-fw" />
            {entryData.jobTitle}
          </p>
          <p className="entry__content-item">
            <FontAwesomeIcon icon="fa-location-dot" className="fa-fw" />
            {entryData.location}
          </p>
          <p className="entry__content-item">
            <FontAwesomeIcon icon="fa-calendar-days" className="fa-fw" />
            {formatDate(entryData.startDate)} - {formatDate(entryData.endDate)}
          </p>
        </>
      );
      break;
  }

  return (
    <>
      <div className="entry__body">
        <div className="entry__content">{content}</div>
        <div className="entry__content-buttons">
          {dropdownId === 'workExperience' ? (
            <button onClick={toggleDetails} className="show-details-button">
              {detailsShown ? (
                <FontAwesomeIcon icon="fa-angle-up" className='fa-fw'/>
              ) : (
                <FontAwesomeIcon icon="fa-angle-down" className='fa-fw'/>
              )}
            </button>
          ) : null}
          <button onClick={handleDelete} className="delete-button">
            <FontAwesomeIcon icon="fa-trash-can" className='fa-fw'/>
          </button>
          <button onClick={handleEdit} className="edit-button">
            <FontAwesomeIcon icon="fa-pencil" className='fa-fw'/>
          </button>
        </div>
      </div>
      {detailsShown && dropdownId === 'workExperience' ? (
        <div className="entry__details">
          <h4>
            <FontAwesomeIcon icon="fa-list-check" className='fa-fw'/> Responsibilities:
          </h4>
          <ul>{dutyBullets}</ul>
        </div>
      ) : null}
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
