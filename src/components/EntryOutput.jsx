import PropTypes from 'prop-types';
import { formatDate, textToArray, formatPhoneNumber } from '../utils/functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

function OutputGeneral({ entryData }) {
  return (
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
}

function OutputEducation({ entryData }) {
  return (
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
}

function OutputWork({ entryData }) {
  return (
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
}

function EntryOutput({ dropdownId, entryData, handleDelete, handleEdit }) {
  const [detailsShown, setDetailsShown] = useState(false);
  let content;
  let dutyBullets;
  let detailsButton;
  let dutyList;

  const toggleDetails = () => {
    if (dropdownId !== 'workExperience') return null;
    setDetailsShown(!detailsShown);
  };

  if (dropdownId === 'general') content = <OutputGeneral entryData={entryData} />;
  if (dropdownId === 'education') content = <OutputEducation entryData={entryData} />;
  if (dropdownId === 'workExperience') {
    content = <OutputWork entryData={entryData} />;

    dutyBullets = textToArray(entryData.duties).map((duty, index) => (
      <li className="duty" key={index}>
        {duty}
      </li>
    ));

    dutyList = (
      <div className="entry__details">
        <h4>
          <FontAwesomeIcon icon="fa-list-check" className="fa-fw" /> Responsibilities:
        </h4>
        <ul>{dutyBullets}</ul>
      </div>
    );

    detailsButton = (
      <button onClick={toggleDetails} className="show-details-button">
        {detailsShown ? (
          <FontAwesomeIcon icon="fa-angle-up" className="fa-fw" />
        ) : (
          <FontAwesomeIcon icon="fa-angle-down" className="fa-fw" />
        )}
      </button>
    );
  }

  return (
    <>
      <div className="entry__body">
        <div className="entry__content">{content}</div>
        <div className="entry__content-buttons">
          {dropdownId === 'workExperience' ? detailsButton : false}
          <button onClick={handleEdit} className="edit-button">
            <FontAwesomeIcon icon="fa-pencil" className="fa-fw" />
          </button>
          <button onClick={handleDelete} className="delete-button">
            <FontAwesomeIcon icon="fa-trash-can" className="fa-fw" />
          </button>
        </div>
      </div>
      {detailsShown && dropdownId === 'workExperience' ? dutyList : false}
    </>
  );
}

OutputGeneral.propTypes = {
  entryData: PropTypes.object
};
OutputEducation.propTypes = {
  entryData: PropTypes.object
};
OutputWork.propTypes = {
  entryData: PropTypes.object
};
EntryOutput.propTypes = {
  dropdownId: PropTypes.string,
  entryData: PropTypes.object,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
  isDeletable: PropTypes.bool
};

export default EntryOutput;
