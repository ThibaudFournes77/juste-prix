import React from 'react';
import {
  Box,
  Button, TextField,
} from '@material-ui/core';
import { Send as SendIcon } from '@material-ui/icons';
import PropTypes from 'prop-types';

import './style.scss';

function ProposalForm({ proposal, onChangeProposal, onSubmit }) {
  const handleChange = (e) => {
    onChangeProposal(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <form className="proposalForm" onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="row" alignItems="flex-end">
        <Box flex="1" className="proposalForm__inputContainer">
          <TextField
            type="number"
            className="proposalForm__input"
            label="Votre proposition"
            color="primary"
            fullWidth
            autoFocus
            value={proposal}
            onChange={handleChange}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary" endIcon={<SendIcon />} className="proposalForm__button">Proposer</Button>
      </Box>
    </form>
  );
}

ProposalForm.propTypes = {
  proposal: PropTypes.string.isRequired,
  onChangeProposal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ProposalForm;
