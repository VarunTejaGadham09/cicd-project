import express from 'express';
import cors from 'cors';

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get('/', (req, res) => {
    res.send('Backend is running');
  });

  app.get('/api', (req, res) => {
    res.json({ message: 'API is working' });
  });

  return app;
}