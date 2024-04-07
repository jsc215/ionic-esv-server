import express from 'express';
import cors from 'cors';
import query from './routes/query';

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.use('/api/query', query);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
