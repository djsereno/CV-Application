import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatDate, hasNonEmptyObjects } from './functions';

function CvEducation({ educationData }) {
  if (hasNonEmptyObjects(educationData)) return null;

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
              <FontAwesomeIcon icon="fa-location-dot" className="fa-fw" />
            </p>
            <p className="dates">
              {formatDate(startDate)} - {formatDate(endDate)}
              <FontAwesomeIcon icon="fa-calendar-days" className="fa-fw" />
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

CvEducation.propTypes = {
  educationData: PropTypes.array
};

export default CvEducation;
