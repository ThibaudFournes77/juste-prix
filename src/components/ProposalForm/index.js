import React from 'react';
import {
  Box,
  Button, Input, InputLabel,
} from '@material-ui/core';
import { Send as SendIcon } from '@material-ui/icons';

import './style.scss';

function ProposalForm() {
  return (
    <form className="proposalForm">
      <Box display="flex" flexDirection="row" alignItems="flex-end">
        <Box flex="1" className="proposalForm__inputContainer">
          <InputLabel htmlFor="number-input">Votre proposition</InputLabel>
          <Input id="number-input" type="number" className="proposalForm__input" />
        </Box>
        <Button type="submit" variant="contained" color="primary" endIcon={<SendIcon />} className="proposalForm__button">Proposer</Button>
      </Box>
    </form>
  );
}

export default ProposalForm;
