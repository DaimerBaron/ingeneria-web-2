import express from 'express';
import cors from 'cors';
import mediaRoutes from './routes/media.js';
import genreRoutes from './routes/genre.js';
import typeRoutes from './routes/type.js';
import getConnetion from './db/connect-mongo.js';
import directorRoutes from './routes/director.js';
import producerRoutes from './routes/producer.js';
import userRoutes from './routes/user.js';
import dotenv from 'dotenv';
import { authRequired } from './middleware/auth.js';
dotenv.config();



const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/media',authRequired,mediaRoutes)
app.use('/genre',authRequired,genreRoutes)
app.use('/type',authRequired,typeRoutes)
app.use('/director',authRequired,directorRoutes)
app.use('/producer',authRequired,producerRoutes)
app.use('/user',userRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

getConnetion();