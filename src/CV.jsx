import PropTypes from 'prop-types';
import General from './General';
import Education from './Education';
import Work from './Work';
import './CV.css';

function CvPage({ general, education, workExperience }) {
  return (
    <div id="cv-container">
      <General generalData={general[0]} />
      <Education educationData={education} />
      <Work workData={workExperience} />
      <pre>{JSON.stringify({ general, education, workExperience }, null, 2)}</pre>
    </div>
  );
}

CvPage.propTypes = {
  general: PropTypes.array,
  education: PropTypes.array,
  workExperience: PropTypes.array
};

export default CvPage;
