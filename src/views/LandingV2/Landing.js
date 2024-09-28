import React, { useRef } from 'react';
import Layout from '../../app/components/Layout';
import LandingDevice from '../Landing/Landing';
import { extendChildContainer, ShowDesktop, ShowDevice } from './Landing.style';

const Landing = () => {
  const videoRef = useRef(null);
  // const buttonRef = useRef(null); // Create a ref for the button
  // const [isMuted, setIsMuted] = useState(true);

  /* const handleUnmute = () => {
    console.log('clicked');
    setIsMuted(false);
    if (videoRef.current) {
      videoRef.current.muted = false;  // Unmute video
      videoRef.current.play();         // Play video with sound
    }
  }; */

  /* useEffect(() => {
    // Check if the button element is available and trigger the click event
    if (buttonRef.current) {
      buttonRef.current.click();  // Trigger the button click programmatically
    }
  }, []); */

  return (
    <>
    {/** Desktoo */}
    <ShowDesktop>
      <Layout hidebackground extendChildContainer={extendChildContainer}>
        <div>
          <video 
            ref={videoRef}
            poster="/assets/image/landing.png" 
            autoPlay 
            loop 
            muted
            style={{ width: '100%', height: 'auto' }}
          >
            <source src="/assets/videos/landingvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Layout>
    </ShowDesktop>
    <ShowDevice>
      <LandingDevice />
    </ShowDevice>
    
    </>
  );
};

export default Landing;
