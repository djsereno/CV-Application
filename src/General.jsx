import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function General({ generalData }) {
  if (Object.values(generalData).filter((value) => value !== '').length === 0) return null;
  const { firstName, lastName, email, phone, location } = generalData;

  return (
    <div id="general">
      <h2 className="fullName">
        {firstName} {lastName}
      </h2>
      <div id="contactInfo">
        <p className="email">
          <FontAwesomeIcon icon="fa-envelope" /> {email}
        </p>
        <p className="phone">
          <FontAwesomeIcon icon="fa-phone" /> {phone}
        </p>
        <p className="location">
          <FontAwesomeIcon icon="fa-location-dot" /> {location}
        </p>
      </div>
    </div>
  );
}

General.propTypes = {
  generalData: PropTypes.object
};

export default General;
