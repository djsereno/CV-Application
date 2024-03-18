import PropTypes from 'prop-types';
import CvGeneral from './CvGeneral';
import CvEducation from './CvEducation';
import CvWork from './CvWork';

function CvPage({ general, education, workExperience }) {
  // console.log(JSON.stringify(general, null, 2));
  // console.log(JSON.stringify(education, null, 2));
  // console.log(JSON.stringify(workExperience, null, 2));
  return (
    <div id="page-container">
      {general.length > 0 ? <CvGeneral generalData={general[0]} /> : null}
      <div id="page-body">
        {workExperience.length > 0 ? <CvWork workData={workExperience} /> : null}
        {education.length > 0 ? <CvEducation educationData={education} /> : null}
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
