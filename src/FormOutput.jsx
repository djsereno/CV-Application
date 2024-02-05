import PropTypes from 'prop-types';
import './App.css';

function FormInput({ firstName, lastName, email, phone, location }) {
  return (
    <div className="section-output">
      <h3>
        {firstName} {lastName}
      </h3>
      <a href={`mailto: ${email}`}>{email}</a>
      <a href={`tel: ${phone}`}>{phone}</a>
      <p>{location}</p>
    </div>
  );
}

export default OutputGeneral;
