const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
