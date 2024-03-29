import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faCalendarDays,
  faEnvelope,
  faGraduationCap,
  faIdBadge,
  faListCheck,
  faLocationDot,
  faPencil,
  faPhone,
  faTrashCan
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { formatDate, textToArray, formatPhoneNumber } from '../utils/functions';

function OutputGeneral({ entryData }) {
  return (
    <>
      <h3>
        {entryData.firstName} {entryData.lastName}
      </h3>
      <p className="entry__content-item">
        <FontAwesomeIcon icon={faEnvelope} className="fa-fw" />
        {entryData.email}
      </p>
      <p className="entry__content-item">
        <FontAwesomeIcon icon={faPhone} className="fa-fw" />
        {formatPhoneNumber(entryData.phone)}
      </p>
      <p className="entry__content-item">
        <FontAwesomeIcon icon={faLocationDot} className="fa-fw" />
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
        <FontAwesomeIcon icon={faGraduationCap} className="fa-fw" />
        {entryData.degree}
      </p>
      <p className="entry__content-item">
        <FontAwesomeIcon icon={faLocationDot} className="fa-fw" />
        {entryData.location}
      </p>
      <p className="entry__content-item">
        <FontAwesomeIcon icon={faCalendarDays} className="fa-fw" />
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
        <FontAwesomeIcon icon={faIdBadge} className="fa-fw" />
        {entryData.jobTitle}
      </p>
      <p className="entry__content-item">
        <FontAwesomeIcon icon={faLocationDot} className="fa-fw" />
        {entryData.location}
      </p>
      <p className="entry__content-item">
        <FontAwesomeIcon icon={faCalendarDays} className="fa-fw" />
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
          <FontAwesomeIcon icon={faListCheck} className="fa-fw" /> Responsibilities:
        </h4>
        <ul>{dutyBullets}</ul>
      </div>
    );

    detailsButton = (
      <button onClick={toggleDetails} className="show-details-button">
        {detailsShown ? (
          <FontAwesomeIcon icon={faAngleUp} className="fa-fw" />
        ) : (
          <FontAwesomeIcon icon={faAngleDown} className="fa-fw" />
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
            <FontAwesomeIcon icon={faPencil} className="fa-fw" />
          </button>
          <button onClick={handleDelete} className="delete-button">
            <FontAwesomeIcon icon={faTrashCan} className="fa-fw" />
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
