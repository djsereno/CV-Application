import PropTypes from 'prop-types';
import { hasNonEmptyObjects, textToArray } from './functions';

function Work({ workData }) {
  if (hasNonEmptyObjects(workData)) return null;

  const content = workData.map((data, index) => {
    const { companyName, jobTitle, location, duties, startDate, endDate } = data;
    const dutyBullets = textToArray(duties).map((duty, index) => (
      <li className="duty" key={index}>
        {duty}
      </li>
    ));

    return (
      <div className="workContainer" key={index}>
        <div className="companyInfo">
          <div className="companyAndTitle">
            <p className="companyName">{companyName}</p>
            <p className="jobTitle">{jobTitle}</p>
          </div>
          <div className="locationAndDates">
            <p className="location">{location}</p>
            <p className="dates">
              {startDate} - {endDate}
            </p>
          </div>
        </div>
        <ul className="duties">{dutyBullets}</ul>
      </div>
    );
  });

  return <div id="workSection">{content}</div>;
}

Work.propTypes = {
  workData: PropTypes.array
};

export default Work;
