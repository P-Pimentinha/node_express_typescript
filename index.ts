import express from 'express';
const app = express();
import remindersRouter from './routers/reminders';

app.use(express.json());
app.use('/reminders', remindersRouter);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(8000, () => console.log('Server Started, (Nodemon)'));
