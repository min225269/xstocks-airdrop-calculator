export default async function handler(req, res) {
  const { address } = req.query;
  if (!address) {
    res.status(400).json({ error: 'address is required' });
    return;
  }
  try {
    const response = await fetch(`https://points-api.xstocks.fi/api/v1/xdrop-user/${address}/dashboard`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'fetch failed' });
  }
}
