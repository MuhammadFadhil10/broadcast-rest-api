import express from 'express';
import Validate from '../validator/Validate.js';

const router = express.Router();

import { registerAccount } from '../controllers/auth.js';

// post
router.post('/register', Validate.password('password'), registerAccount);

export default router;
