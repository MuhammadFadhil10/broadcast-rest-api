import Auth from '../models/Auth.js';
import { validationResult } from 'express-validator';

export const registerAccount = async (req, res, next) => {
	const { email, password } = req.body;
	const error = validationResult(req);
	const errorMessage = error.array().map((err) => err.msg);
	if (!error.isEmpty) {
		return res.json({ status: 'error', message: errorMessage });
	}
	try {
		await Auth.createAccount(email, password);
		return res.json({
			status: 'success',
			message: 'success create your account!',
		});
	} catch (error) {
		error.statusCode = 401;
		throw error;
	}
};
