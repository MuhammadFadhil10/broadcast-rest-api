import db from 'mysql2';

export default db
	.createPool({
		user: 'root',
		password: 'Fadhil1010',
		host: 'localhost',
		database: 'my_broadcast',
	})
	.promise();
