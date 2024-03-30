import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faCalendarDays
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import { formatDate, formatPhoneNumber, hasNonEmptyObjects, textToArray } from '../utils/functions';

function CvGeneral({ generalData }) {
  if (hasNonEmptyObjects(generalData)) return false;
  const { firstName, lastName, email, phone, location } = generalData[0];
  const formattedPhone = formatPhoneNumber(phone);

  return (
    <div className="cv-header">
      <h2 className="cv-header__full-name">
        {firstName} {lastName}
      </h2>
      <div className="cv-header__contact-info">
        <p className="email">
          <FontAwesomeIcon icon={faEnvelope} className="fa-fw" /> {email}
        </p>
        <p className="phone">
          <FontAwesomeIcon icon={faPhone} className="fa-fw" /> {formattedPhone}
        </p>
        <p className="location">
          <FontAwesomeIcon icon={faLocationDot} className="fa-fw" /> {location}
        </p>
      </div>
    </div>
  );
}

function CvEducation({ educationData }) {
  if (hasNonEmptyObjects(educationData)) return false;

  const content = educationData.map((data, index) => {
    const { schoolName, degree, location, startDate, endDate } = data;

    return (
      <div className="cv-section__entry" key={index}>
        <div className="cv-section__content">
          <div className="main-info">
            <p className="school-name">{schoolName}</p>
            <p className="degree">{degree}</p>
          </div>
          <div className="location-and-dates">
            <p className="location">
              {location}
              <FontAwesomeIcon icon={faLocationDot} className="fa-fw" />
            </p>
            <p className="dates">
              {formatDate(startDate)} - {formatDate(endDate)}
              <FontAwesomeIcon icon={faCalendarDays} className="fa-fw" />
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="cv-section">
      <h3 className="cv-section__header">Education</h3>
      {content}
    </div>
  );
}

function CvWork({ workData }) {
  if (hasNonEmptyObjects(workData)) return false;

  const content = workData.map((data, index) => {
    const { companyName, jobTitle, location, duties, startDate, endDate } = data;
    const dutyBullets = textToArray(duties).map((duty, index) => (
      <li className="duty" key={index}>
        {duty}
      </li>
    ));

    return (
      <div className="cv-section__entry" key={index}>
        <div className="cv-section__content">
          <div className="main-info">
            <p className="company-name">{companyName}</p>
            <p className="job-title">{jobTitle}</p>
          </div>
          <div className="location-and-dates">
            <p className="location">
              {location}
              <FontAwesomeIcon icon={faLocationDot} className="fa-fw" />
            </p>
            <p className="dates">
              {formatDate(startDate)} - {formatDate(endDate)}
              <FontAwesomeIcon icon={faCalendarDays} className="fa-fw" />
            </p>
          </div>
        </div>
        <ul className="duties">{dutyBullets}</ul>
      </div>
    );
  });

  return (
    <div className="cv-section">
      <h3 className="cv-section__header">Work Experience</h3>
      {content}
    </div>
  );
}

function CvPage({ general, education, workExperience }) {
  return (
    <div id="page-container">
      {general.length > 0 ? <CvGeneral generalData={general} /> : false}
      <div id="page-body">
        {workExperience.length > 0 ? <CvWork workData={workExperience} /> : false}
        {education.length > 0 ? <CvEducation educationData={education} /> : false}
      </div>
    </div>
  );
}

CvGeneral.propTypes = {
  generalData: PropTypes.array
};
CvEducation.propTypes = {
  educationData: PropTypes.array
};
CvWork.propTypes = {
  workData: PropTypes.array
};
CvPage.propTypes = {
  general: PropTypes.array,
  education: PropTypes.array,
  workExperience: PropTypes.array
};

export default CvPage;
