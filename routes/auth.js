import express from 'express';
import Validate from '../validator/Validate.js';

const router = express.Router();

import { registerAccount } from '../controllers/auth.js';

// post
router.post(
	'/register',
	Validate.password('password'),
	Validate.email('email'),
	Validate.phone('phone'),
	registerAccount
);

export default router;
