import { body } from 'express-validator';

export default class Validate {
	static password(fieldName) {
		return body(fieldName).notEmpty().withMessage('password must be fill');
	}
}
