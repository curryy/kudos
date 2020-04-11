import express from "express";

const app = express();
const port = 3000;

const kudosList = [];
const people = [];
const groups = [];

const kudos = [...kudosList];

app.get("/kudos", (req, res) => res.send(kudos));
app.post("/kudos", (req, res) => {
  kudosList.push(req.body);
  res.send({ status: 201 });
});
app.get("/people", (req, res) => res.send(people));
app.get("/group", (req, res) => res.send(groups));

app.listen(port, () => console.log("Server is running..."));
