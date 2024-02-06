import PropTypes from 'prop-types';
import './App.css';

function FormOutput({ data, handleEdit }) {
  const formValues = data.reduce((acc, input) => ({ [input.id]: input.value, ...acc }), {});
  const { firstName, lastName, email, phone, location } = { ...formValues };

  return (
    <div className="section-output">
      <div>
        <h3>
          {firstName} {lastName}
        </h3>
        <a href={`mailto: ${email}`}>{email}</a>
        <a href={`tel: ${phone}`}>{phone}</a>
        <p>{location}</p>
      </div>
      <button type="submit" onClick={handleEdit}>
        Edit
      </button>
    </div>
  );
}

export default FormOutput;
