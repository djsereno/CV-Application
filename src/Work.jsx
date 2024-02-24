import PropTypes from 'prop-types';

function Work({ workData }) {
  if (workData.length === 0) return null;

  const content = workData.map((data, index) => {
    const { companyName, jobTitle, location, duties, startDate, endDate } = data;
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
        <p className="duties">{duties}</p>
      </div>
    );
  });

  return <div id="workSection">{content}</div>;
}

Work.propTypes = {
  workData: PropTypes.array
};

export default Work;
