import PropTypes from 'prop-types';
import General from './General';
import Education from './Education';

function CvPage({ general, education, workExperience }) {
  return (
    <div id="cv-container">
      <General {...general[0]} />
      <Education educationData={education} />
      <pre>{JSON.stringify({ general, education, workExperience }, null, 2)}</pre>
    </div>
  );
}

CvPage.propTypes = {
  general: PropTypes.object,
  education: PropTypes.object,
  workExperience: PropTypes.object
};

export default CvPage;
