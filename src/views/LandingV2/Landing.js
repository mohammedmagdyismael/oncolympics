import React from 'react';
import Layout from '../../app/components/Layout';

import { Video, Source } from './Landing.style';
 
const Landing = () => {
  return (
    <Layout hidebackground>
      <div style={{ marginTop: '20px' }}>
        <Video poster={`/assets/image/landing.png`} autoPlay loop playsInline>
          <Source src={`/assets/videos/landingvideo.mp4`} type="video/mp4" size="720" />
        </Video>
      </div>
    </Layout>
  );
};

export default Landing;
