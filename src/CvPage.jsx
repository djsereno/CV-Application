import PropTypes from 'prop-types';
import CvGeneral from './CvGeneral';
import CvEducation from './CvEducation';
import CvWork from './CvWork';

function CvPage({ general, education, workExperience }) {
  return (
    <div id="page-container">
      <CvGeneral generalData={general[0]} />
      <div id="page-body">
        <CvWork workData={workExperience} />
        <CvEducation educationData={education} />
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
