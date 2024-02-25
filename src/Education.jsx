import PropTypes from 'prop-types';
import { hasNonEmptyObjects } from './functions';

function Education({ educationData }) {
  if (hasNonEmptyObjects(educationData)) return null;

  const content = educationData.map((data, index) => {
    const { schoolName, degree, location, startDate, endDate } = data;

    return (
      <div className="educationContainer" key={index}>
        <div className="schoolAndDegree">
          <p className="schoolName">{schoolName}</p>
          <p className="degree">{degree}</p>
        </div>
        <div className="locationAndDates">
          <p className="location">{location}</p>
          <p className="dates">
            {startDate} - {endDate}
          </p>
        </div>
      </div>
    );
  });

  return <div id="educationSection">{content}</div>;
}

Education.propTypes = {
  educationData: PropTypes.array
};

export default Education;
