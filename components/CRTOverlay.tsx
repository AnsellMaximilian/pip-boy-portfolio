import React from 'react';

const CRTOverlay: React.FC = () => {
  return (
    <>
      <div className="scanline z-50"></div>
      <div className="screen-glow z-40"></div>
      <div className="fixed inset-0 z-50 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,_transparent_50%,_#000_100%)]"></div>
    </>
  );
};

export default CRTOverlay;