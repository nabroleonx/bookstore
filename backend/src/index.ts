import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import { sequelize } from './config/db';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

const startApp = async () => {
  sequelize
    .sync()
    .then(() => {
      app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
      });
    })
    .catch((error) => {
      console.error('Error connecting to the database:', error);
    });
};

startApp();
