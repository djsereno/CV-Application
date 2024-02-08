import PropTypes from 'prop-types';
import './App.css';

function FormOutput({ dropdownId, data, handleEdit }) {
  const formValues = data.reduce((acc, input) => ({ [input.id]: input.value, ...acc }), {});

  let content;
  switch (dropdownId) {
    case 'general':
      content = (
        <div>
          <h3>
            {formValues.firstName} {formValues.lastName}
          </h3>
          <a href={`mailto: ${formValues.email}`}>{formValues.email}</a>
          <a href={`tel: ${formValues.phone}`}>{formValues.phone}</a>
          <p>{formValues.location}</p>
        </div>
      );
      break;

    case 'education':
      content = (
        <div>
          <h3>{formValues.schoolName}</h3>
          <p>{formValues.location}</p>
          <p>{formValues.degree}</p>
          <p>
            {formValues.startDate} - {formValues.endDate}
          </p>
        </div>
      );
      break;

    case 'workExperience':
      content = (
        <div>
          <h3>{formValues.companyName}</h3>
          <p>{formValues.location}</p>
          <p>{formValues.jobTitle}</p>
          <p>
            {formValues.startDate} - {formValues.endDate}
          </p>
          <p>{formValues.duties}</p>
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
  data: PropTypes.array,
  handleEdit: PropTypes.func
};

export default FormOutput;
