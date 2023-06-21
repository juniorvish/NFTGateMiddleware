import { checkNFTOwnership } from '../../lib/holaplexAPI';

export default async function tokenGate(req, res) {
  const { walletAddress, project, drop } = req.body;

  try {
    const ownsNFT = await checkNFTOwnership(walletAddress, project, drop);

    if (ownsNFT) {
      res.status(200).json({ success: true, message: 'Access granted' });
    } else {
      res.status(403).json({ success: false, message: 'Access denied, NFT not found in wallet' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
}