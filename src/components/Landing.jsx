import React from 'react';
import { colors } from '../palette';
import useIsMobile from '../useIsMobile';

const Landing = () => {
  const isMobile = useIsMobile();
  const text = 'Im a midwest Chicagoan, mixed media artist, and an advocate for self-care and human connection. My works include ceramics, prints, digital art, drawing, painting, sculpture, and other combinations of techniques. Drawing from personal struggles and study of others around me, I use my art as a platform to promote conversations surrounding mental wellness and human experiences. I aim to continue to create throughout my life and provide a path for others to find a sense of self-representation and a safe space of their own.'

  return (
    <div className="">
      {isMobile ?   (
        <div style={{ backgroundColor: colors.white, color: 'black' }}>
            {text}
        </div>
      ) : (      
        <>
          <div style={{ backgroundColor: colors.white, color: 'black' }}>
          {text}
          </div>
        </>
      )}
    </div>
  );
};

export default Landing;
