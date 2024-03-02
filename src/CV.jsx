import PropTypes from 'prop-types';
import General from './General';
import Education from './Education';
import Work from './Work';
import './CV.css';

function CvPage({ general, education, workExperience }) {
  return (
    <div id="page-container">
      <General generalData={general[0]} />
      <div id="page-body">
        <Work workData={workExperience} />
        <Education educationData={education} />
      </div>
    </div>
  );
}

CvPage.propTypes = {
  general: PropTypes.array,
  education: PropTypes.array,
  workExperience: PropTypes.array
};

export default CvPage;
