import PropTypes from 'prop-types';
import './App.css';

function FormOutput({ dropdownId, formVals, handleEdit }) {
  // const formValues = formVals.reduce((acc, input) => ({ [input.id]: input.value, ...acc }), {});

  let content;
  switch (dropdownId) {
    case 'general':
      content = (
        <div>
          <h3>
            {formVals.firstName} {formVals.lastName}
          </h3>
          <a href={`mailto: ${formVals.email}`}>{formVals.email}</a>
          <a href={`tel: ${formVals.phone}`}>{formVals.phone}</a>
          <p>{formVals.location}</p>
        </div>
      );
      break;

    case 'education':
      content = (
        <div>
          <h3>{formVals.schoolName}</h3>
          <p>{formVals.location}</p>
          <p>{formVals.degree}</p>
          <p>
            {formVals.startDate} - {formVals.endDate}
          </p>
        </div>
      );
      break;

    case 'workExperience':
      content = (
        <div>
          <h3>{formVals.companyName}</h3>
          <p>{formVals.location}</p>
          <p>{formVals.jobTitle}</p>
          <p>
            {formVals.startDate} - {formVals.endDate}
          </p>
          <p>{formVals.duties}</p>
        </div>
      );
      break;
  }

  return (
    <div className="section-output">
      {content}
      <button type="submit" onClick={handleEdit}>
        Edit
      </button>
    </div>
  );
}

FormOutput.propTypes = {
  dropdownId: PropTypes.string,
  formVals: PropTypes.object,
  handleEdit: PropTypes.func
};

export default FormOutput;
