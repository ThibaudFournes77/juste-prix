import { Box, Typography } from '@material-ui/core';
import React from 'react';

import './style.scss';

function Propositions() {
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
          min
        </Typography>
      </Box>
      <Box className="proposition resultProposal">
        <Typography variant="body1">
          result
        </Typography>
      </Box>
      <Box className="proposition maxProposal">
        <Typography variant="body1">
          max
        </Typography>
      </Box>
    </Box>
  );
}

export default Propositions;
