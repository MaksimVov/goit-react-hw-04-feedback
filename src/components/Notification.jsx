import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

Notification.prototype = {
  message: PropTypes.string.isRequired,
};
