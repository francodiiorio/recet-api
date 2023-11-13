import express from 'express';
import router from './routes/router.js';
import connection from './connection/connection.js';
import { serverPort } from './config/config.js';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use('/api', router);

await connection.sync({ force: false });
app.listen(serverPort, () => {
  console.log('Server is running on port 8080');
});
