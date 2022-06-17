import db from '../config/db.js';

// REGISTER
export default class Register {
	static createAccount(adminEmail, adminPassword) {
		return db.execute(`INSERT INTO admin(email,password) VALUES(?,?)`, [
			adminEmail,
			adminPassword,
		]);
	}
}
