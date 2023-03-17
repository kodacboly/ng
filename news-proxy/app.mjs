import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/news', async (req, res) => {
  const source = req.query.source;
  const apiKey = '10cf34f9bc3a4095bb7c06a1af4f6f7f';
  const url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.send(data);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching news data', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
