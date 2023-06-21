import React from 'react';
import { checkNFTOwnership } from '../lib/holaplexAPI';

const TokenGate = ({ children, walletAddress, project, drop }) => {
  const [isAllowed, setIsAllowed] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const verifyNFTOwnership = async () => {
      setIsLoading(true);
      const hasNFT = await checkNFTOwnership(walletAddress, project, drop);
      setIsAllowed(hasNFT);
      setIsLoading(false);
    };

    verifyNFTOwnership();
  }, [walletAddress, project, drop]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAllowed) {
    return <div>Access denied. You do not own the required NFT.</div>;
  }

  return <>{children}</>;
};

export default TokenGate;