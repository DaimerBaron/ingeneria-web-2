import express from 'express';
import mediaRoutes from './routes/media.js';
const app = express();
const port = 5100;

app.use('/media',mediaRoutes)
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});