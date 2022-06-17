import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

import authRoutes from './routes/auth.js';

app.use(bodyParser.json());

app.use(
	cors({
		origin: 'http://localhost:3000',
	})
);

app.use(authRoutes);

app.listen(process.env.PORT || 5000, () => {
	console.log('app listening');
});
