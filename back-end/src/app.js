import express from 'express';
import dotenv from 'dotenv';

import authentication from './api/controllers/authentication';
import database from './database';

dotenv.config();

await database;

const { PORT } = process.env;

// Create Express server & instace a router
const app = express();
const router = express.Router();

// Server parse JSON payloads & set initial router
app.use(express.json());
app.use('/api/v1', router);

router.use('/authentication', authentication);
app.listen(PORT, () => console.log(`server listen on localhost:${PORT}`));

//  Server Health Test
router.get('/', (req, res) => {
  res.send('Server Ok!');
});