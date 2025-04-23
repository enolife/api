import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'json', 'index.json');

  // Allow both GET and POST methods
  if (req.method === 'GET' || req.method === 'POST') {
    try {
      const jsonData = fs.readFileSync(filePath, 'utf-8');
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(jsonData);
    } catch (err) {
      res.status(500).json({ error: 'Failed to read JSON file' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
