export default function handler(req, res) {
  res.status(200).json({
    status: 'ok',
    message: 'Next.js API route healthy',
    timestamp: new Date().toISOString()
  });
}
