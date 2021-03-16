import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@material-ui/lab';

import './style.scss';

function Message({ message, result }) {
  return (
    <Alert variant="filled" severity={result ? 'success' : 'info'}>
      {message}
    </Alert>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  result: PropTypes.number,
};

Message.defaultProps = {
  result: null,
};

export default Message;
