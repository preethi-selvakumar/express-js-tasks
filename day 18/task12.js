const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/form', (req, res) => {
    res.send(`
    <form action="/form-submit" method="POST">
      <label>Name: <input type="text" name="name" /></label><br>
      <label>Email: <input type="email" name="email" /></label><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/form-submit', (req, res) => {
    res.send(`Form received: ${JSON.stringify(req.body)}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
