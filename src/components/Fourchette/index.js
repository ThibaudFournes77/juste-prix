// == Import npm
import { Container, Paper, Typography } from '@material-ui/core';
import React from 'react';
import Message from 'src/components/Message';
import Propositions from 'src/components/Propositions';
import ProposalForm from 'src/components/ProposalForm';

// == Import
import './styles.scss';

// == Composant
const Fourchette = () => (
  <Container maxWidth="sm" className="fourchette">
    <Typography variant="h3" component="h1" gutterBottom>Le juste prix</Typography>
    <Paper className="fourchette__container" elevation={3}>
      <Typography variant="h4" component="h2" gutterBottom>Propose un nombre</Typography>
      <Message />
      <Propositions />
      <ProposalForm />
    </Paper>
  </Container>
);

// == Export
export default Fourchette;
