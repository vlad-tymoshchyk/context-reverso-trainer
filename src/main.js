const express = require("express");
const PORT = process.env.PORT || 8080;

const app = express();

app.get("/", (req, res) => {
  res.end("This is done here");
});

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
