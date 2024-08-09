// knockouts.js
import React from 'react';
import Layout from '../../app/components/Layout/Layout';
import { Container, KnockOutsImg } from './knockouts.style';
 
const Groups = () => {
  return (
    <Layout>
      <Container>
        <KnockOutsImg src='assets/image/knockouts.png' alt='knockouts' />
      </Container>
    </Layout>
  );
};

export default Groups;
