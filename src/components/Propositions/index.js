import { Box, Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function Propositions({ minProposal, maxProposal, result }) {
  return (
    <Box
      className="propositions"
      display="flex"
      flexWrap="wrap"
      flexDirection="row"
      justifyContent="space-around"
      alignItems="center"
    >
      <Box className="proposition minProposal">
        <Typography variant="body1">
          {minProposal}
        </Typography>
      </Box>
      <Box className="proposition resultProposal">
        <Typography variant="body1">
          {result || '?'}
        </Typography>
      </Box>
      <Box className="proposition maxProposal">
        <Typography variant="body1">
          {maxProposal}
        </Typography>
      </Box>
    </Box>
  );
}

Propositions.propTypes = {
  minProposal: PropTypes.number.isRequired,
  maxProposal: PropTypes.number.isRequired,
  result: PropTypes.number,
};

Propositions.defaultProps = {
  result: null,
};

export default Propositions;
