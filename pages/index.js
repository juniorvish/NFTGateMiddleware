import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NFTGateMiddleware from '../middleware/tokenGate.js';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const checkNFTOwnership = async () => {
      const isOwner = await NFTGateMiddleware();
      if (!isOwner) {
        router.push('/protectedRoute');
      }
    };
    checkNFTOwnership();
  }, []);

  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Welcome to NFTGateMiddleware
        </h1>
        <p className="description">
          This route is protected by NFT ownership
        </p>
      </main>
    </div>
  );
}