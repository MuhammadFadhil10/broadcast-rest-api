import Auth from '../models/Auth.js';

export const registerAccount = async (req, res, next) => {
	const { email, password } = req.body;
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
