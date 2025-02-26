import express from 'express';
import mediaRoutes from './routes/media.js';
import genreRoutes from './routes/genre.js';
import typeRoutes from './routes/type.js';
import getConnetion from './db/connect-mongo.js';
import directorRoutes from './routes/director.js';
import producerRoutes from './routes/producer.js';

const app = express();
const port = 5100;

app.use(express.json());
app.use('/media',mediaRoutes)
app.use('/genre',genreRoutes)
app.use('/type',typeRoutes)
app.use('/director',directorRoutes)
app.use('/producer',producerRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

getConnetion();