import express from 'express';
import bodyParser from 'body-parser';

const app = express();

import authRoutes from './routes/auth.js';

app.use(bodyParser.json());

app.use(authRoutes);

app.listen(process.env.PORT || 5000, () => {
	console.log('app listening');
});
