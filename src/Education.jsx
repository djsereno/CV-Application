import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatDate, hasNonEmptyObjects } from './functions';

function Education({ educationData }) {
  if (hasNonEmptyObjects(educationData)) return null;

  const content = educationData.map((data, index) => {
    const { schoolName, degree, location, startDate, endDate } = data;

    return (
      <div className="education-container" key={index}>
        <div className="school-and-degree">
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
    );
  });

  return (
    <div id="education-section">
      <h2 className="section-header">Education</h2>

      {content}
    </div>
  );
}

Education.propTypes = {
  educationData: PropTypes.array
};

export default Education;
