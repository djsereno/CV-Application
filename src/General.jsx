import PropTypes from 'prop-types';

function General({ generalData }) {
  if (Object.values(generalData).filter((value) => value !== '').length === 0) return null;
  const { firstName, lastName, email, phone, location } = generalData;
  
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
  generalData: PropTypes.object
};

export default General;
