import express from 'express';
import mediaRoutes from './routes/media.js';
import genreRoutes from './routes/genre.js';
import typeRoutes from './routes/type.js';
import getConnetion from './db/connect-mongo.js';

const app = express();
const port = 5100;

app.use(express.json());
app.use('/media',mediaRoutes)
app.use('/genre',genreRoutes)
app.use('/type',typeRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

getConnetion();