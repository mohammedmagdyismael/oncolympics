// knockouts.js
import Layout from '../../app/components/Layout/Layout';
import { Container, KnockOutsImg } from './knockouts.style';
 
const Groups = () => {
  return (
    <Layout>
      <Container>
        <KnockOutsImg src={`${import.meta.env.VITE_APP_ONCO_ASSETS_URL}/image/knockouts.png`} alt='knockouts' />
      </Container>
    </Layout>
  );
};

export default Groups;
