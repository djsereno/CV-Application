import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatPhoneNumber } from './functions';

function General({ generalData }) {
  if (Object.values(generalData).filter((value) => value !== '').length === 0) return null;
  const { firstName, lastName, email, phone, location } = generalData;
  const formattedPhone = formatPhoneNumber(phone);

  return (
    <div id="header">
      <h2 className="full-name">
        {firstName} {lastName}
      </h2>
      <div id="contact-info">
        <p className="email">
          <FontAwesomeIcon icon="fa-envelope" /> {email}
        </p>
        <p className="phone">
          <FontAwesomeIcon icon="fa-phone" /> {formattedPhone}
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
