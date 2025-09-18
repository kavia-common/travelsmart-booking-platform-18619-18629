 /**
  * PUBLIC_INTERFACE
  * Health API route for basic uptime check.
  * Returns: JSON { status: 'ok' } with 200 status.
  */
export default function handler(req, res) {
  res.status(200).json({ status: "ok" });
}
