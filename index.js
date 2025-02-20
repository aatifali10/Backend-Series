const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Today is my first server build. I'm so exicted");
});

app.listen(process.env.PORT, () => {
  console.log(`server listen http://localhost:${process.env.PORT}`);
});
