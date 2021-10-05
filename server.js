import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import usersRouter from './routes/User.routes.js';

const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(`Error: ${error}`));
db.once('open', () => console.log(`DB connected!`));

app.use(express.json());

//routes
app.use(`/users`, usersRouter);

app.listen(process.env.PORT, () =>
  console.log(`server has started at port ${process.env.PORT}`)
);
