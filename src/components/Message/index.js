import React from 'react';
import { Alert } from '@material-ui/lab';

import './style.scss';

function Message() {
  return (
    <Alert variant="filled" severity="info">
      Aucune proposition récente
    </Alert>
  );
}

export default Message;
