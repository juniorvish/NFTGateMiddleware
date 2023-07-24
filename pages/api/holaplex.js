import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { walletAddress } = req.body;

  try {
    const response = await axios.get(`https://holaplex.com/api/owners/${walletAddress}`);
    const ownedNFTs = response.data;

    res.status(200).json({ ownedNFTs });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch NFTs' });
  }
}