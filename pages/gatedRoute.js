import React from 'react';
import TokenGate from '../components/TokenGate';

const GatedRoute = () => {
  return (
    <div>
      <h1>Welcome to the GatedRoute</h1>
      <p>This route is protected by the NFTGateMiddleware.</p>
    </div>
  );
};

export default TokenGate(GatedRoute);