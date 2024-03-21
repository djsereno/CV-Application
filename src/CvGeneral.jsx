import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatPhoneNumber } from './functions';

function CvGeneral({ generalData }) {
  if (Object.values(generalData).filter((value) => value !== '').length === 0) return null;
  const { firstName, lastName, email, phone, location } = generalData;
  const formattedPhone = formatPhoneNumber(phone);

  return (
    <div className="cv-header">
      <h2 className="cv-header__full-name">
        {firstName} {lastName}
      </h2>
      <div className="cv-header__contact-info">
        <p className="email">
          <FontAwesomeIcon icon="fa-envelope" className='fa-fw'/> {email}
        </p>
        <p className="phone">
          <FontAwesomeIcon icon="fa-phone" className='fa-fw'/> {formattedPhone}
        </p>
        <p className="location">
          <FontAwesomeIcon icon="fa-location-dot" className='fa-fw'/> {location}
        </p>
      </div>
    </div>
  );
}

CvGeneral.propTypes = {
  generalData: PropTypes.object
};

export default CvGeneral;
