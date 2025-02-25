import express from "express";

const app = express();
const port = 5000;

app.get("/jokes", (req, res) => {
  const jokes = [
    { id: 1, name: "Joke No 1", description: "Joke is nothing" },
    { id: 2, name: "Joke No 2", description: "Second Joke" },
    { id: 3, name: "Joke No 3", description: "Third Joke" },
    { id: 4, name: "Joke No 4", description: "Fourth Joke" },
    { id: 5, name: "Joke No 5", description: "Fifth Joke" },
  ];
  res.json(jokes);
});

app.listen(port, () => {
  console.log(`server listen on http://localhost:${port}`);
});
