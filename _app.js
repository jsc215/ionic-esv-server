import express from 'express';
import cors from 'cors';
const app = express();
import query from './routes/query';
const port = 3000 || process.env.PORT;
app.use(cors());

app.use('/api/query', query);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});

// app.get('/text', (req, res) => {
