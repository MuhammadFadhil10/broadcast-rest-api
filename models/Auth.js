import db from '../config/db.js';

// REGISTER
export default class Register {
	static createAccount(adminEmail, adminPassword, adminPhone) {
		return db.execute(`INSERT INTO admin(email,password,phone) VALUES(?,?,?)`, [
			adminEmail,
			adminPassword,
			adminPhone,
		]);
	}
}
