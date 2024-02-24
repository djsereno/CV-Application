import PropTypes from 'prop-types';

function General({ firstName, lastName, email, phone, location }) {
  return (
    <div id="general">
      <h2 className="fullName">
        {firstName} {lastName}
      </h2>
      <div id="contactInfo">
        <p className="email">{email}</p>
        <p className="phone">{phone}</p>
        <p className="location">{location}</p>
      </div>
    </div>
  );
}

General.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  location: PropTypes.string
};

export default General;
