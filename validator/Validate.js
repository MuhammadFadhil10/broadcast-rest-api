import { body } from 'express-validator';

export default class Validate {
	static password(fieldName) {
		return body(fieldName).notEmpty().withMessage('password required!');
	}
	static email(fieldName) {
		return body(fieldName).notEmpty().withMessage('email required!');
	}
	static phone(fieldName) {
		return body(fieldName)
			.notEmpty()
			.withMessage('phone required!')
			.isLength({ min: 8 })
			.withMessage('phone number minimum 8 character');
	}
}
