import Auth from '../models/Auth.js';
import { validationResult } from 'express-validator';

export const registerAccount = async (req, res, next) => {
	const { email, password, phone } = req.body;
	const error = validationResult(req);
	const errorMessage = error.array().map((err) => err.msg);
	if (!error.isEmpty()) {
		console.log(error.array());
		return res.json({ status: 'error', message: errorMessage });
	}
	try {
		await Auth.createAccount(email, password, phone);
		return res.json({
			status: 'success',
			message: 'success create your account!',
		});
	} catch (error) {
		error.statusCode = 401;
		throw error;
	}
};
