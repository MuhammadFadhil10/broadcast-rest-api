import express from 'express';

const router = express.Router();

import { registerAccount } from '../controllers/auth.js';

// post
router.post('/register', registerAccount);

export default router;
