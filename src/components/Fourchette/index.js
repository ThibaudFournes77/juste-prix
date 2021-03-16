// == Import npm
import { Container, Paper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Message from 'src/components/Message';
import Propositions from 'src/components/Propositions';
import ProposalForm from 'src/components/ProposalForm';

// == Import
import './styles.scss';

// == Composant
const Fourchette = () => {
  const [minProposal, setMinProposal] = useState(0);
  const [maxProposal, setMaxProposal] = useState(100);
  const [proposal, setProposal] = useState('');
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState('Aucune proposition récente');
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    const randomValue = Math.floor(Math.random() * 100);
    setAnswer(randomValue);
  }, []);

  const handleProposal = (value) => {
    setProposal(value);
  };

  const handleSubmitForm = () => {
    const submittedValue = parseInt(proposal, 10);
    setCount(count + 1);
    if (submittedValue > answer && submittedValue < maxProposal) {
      setMaxProposal(submittedValue);
      setMessage("C'est moins !");
    }
    if (submittedValue < answer && submittedValue > minProposal) {
      setMinProposal(submittedValue);
      setMessage("C'est plus !");
    }
    if (submittedValue === answer) {
      setResult(submittedValue);
      setMessage(`Bravo ! Tu as trouvé le bon numéro en ${count} coups !!`);
      // Le problème ici est que quand le message s'affiche,
      // count a encore sa valeur d'avant le submit
      // On pourrait mettre 1 comme valeur initiale de count mais ce serait un peu de la bidouille
    }
  };
  return (
    <Container maxWidth="sm" className="fourchette">
      <Typography variant="h3" component="h1" gutterBottom>Le juste prix</Typography>
      <Paper className="fourchette__container" elevation={3}>
        <Typography variant="h4" component="h2" gutterBottom>Propose un nombre</Typography>
        <Message result={result} message={message} />
        <Propositions minProposal={minProposal} result={result} maxProposal={maxProposal} />
        <ProposalForm
          proposal={proposal}
          onChangeProposal={handleProposal}
          onSubmit={handleSubmitForm}
        />
      </Paper>
    </Container>
  );
};

// == Export
export default Fourchette;
