require('dotenv').config();
import express from 'express';
import routes from './routes';

const app = express();
app.use(routes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}.`);
});
