import PropTypes from 'prop-types';
import { formatDate, hasNonEmptyObjects, textToArray } from './functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CvWork({ workData }) {
  if (hasNonEmptyObjects(workData)) return null;

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
              <FontAwesomeIcon icon="fa-location-dot" className="fa-fw" />
            </p>
            <p className="dates">
              {formatDate(startDate)} - {formatDate(endDate)}
              <FontAwesomeIcon icon="fa-calendar-days" className="fa-fw" />
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

CvWork.propTypes = {
  workData: PropTypes.array
};

export default CvWork;
