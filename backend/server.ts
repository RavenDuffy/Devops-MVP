import express from 'express';
import cors from 'cors';

const PORT = 4005;

const server = express();
server.use(express.json());
server.use(cors({ origin: true, credentials: true }));
server.use(express.static(__dirname));
server.set('trust_proxy', 1);

server.get('/', (req, res) => {
  res.json({
    Welcome: req.ip,
    Message: 'hello',
  });
});

server.listen(PORT);
