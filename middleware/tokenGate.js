```javascript
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const tokenGate = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = req.query;

  try {
    const response = await axios.get(`https://holaplex.com/api/v1/nfts/${token}`);
    const nft = response.data;

    if (!nft) {
      return res.status(404).json({ error: 'NFT not found' });
    }

    const userOwnsNFT = nft.owners.includes(req.user.address);

    if (!userOwnsNFT) {
      return res.status(403).json({ error: 'Access denied' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
};

export default tokenGate;
```