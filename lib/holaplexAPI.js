import fetch from 'node-fetch';

export async function checkNFTOwnership(walletAddress, project, drop) {
  const holaplexAPIUrl = `https://holaplex.com/api/v1/projects/${project}/drops/${drop}/owners/${walletAddress}`;

  try {
    const response = await fetch(holaplexAPIUrl);
    const data = await response.json();

    if (data.success && data.owned) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error fetching Holaplex API:', error);
    return false;
  }
}