import express from "express";
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});

const kudosList = [
  {
    description:
      "Wielkie dzięki @[Przemysław Nowak](13) za współpracę przy ostatnim projekcie :[ ... ](ok_hand)Dzięki Twojej pomocy poradziłam sobie z badaniami i analizą. Mam nadzieję, że jeszcze wiele takich projektów przed nami :[ ... ](female-office-worker):[ ... ](female-office-worker):[ ... ](female-office-worker)",
    person: {
      id: 13,
      name: "Przemysław Nowak",
      avatar: "https://api.adorable.io/avatars/14",
    },
    kudosType: 5,
    group: 4,
    id: 0,
    likes: 9,
    comments: 2,
    created: "2020-04-16T13:32:09.305Z",
    author: {
      id: 3,
      name: "Idalia Stępień",
      avatar: "https://api.adorable.io/avatars/4",
    },
  },

  {
    description:
      ":[ ... ](tada):[ ... ](tada):[ ... ](tada) Gratuluje nowej posady! #[praca](2) #[inspiracja](1)",
    person: {
      id: 11,
      name: "Ludwik Sadowska",
      avatar: "https://api.adorable.io/avatars/12",
    },
    kudosType: 2,
    group: 1,
    id: 1,
    likes: 6,
    comments: 1,
    created: "2020-04-16T13:45:09.305Z",
    author: {
      id: 19,
      name: "Artur Sokołowski",
      avatar: "https://api.adorable.io/avatars/20",
    },
  },
];

const people = [
  {
    id: 1,
    name: "Irena Szewczyk",
    avatar: "https://api.adorable.io/avatars/2",
  },
  {
    id: 2,
    name: "Magdalena Baran",
    avatar: "https://api.adorable.io/avatars/3",
  },
  {
    id: 3,
    name: "Idalia Stępień",
    avatar: "https://api.adorable.io/avatars/4",
  },
  {
    id: 4,
    name: "Oktawia Cieślak",
    avatar: "https://api.adorable.io/avatars/5",
  },
  {
    id: 5,
    name: "Olimpia Michalak",
    avatar: "https://api.adorable.io/avatars/6",
  },
  {
    id: 6,
    name: "Amanda Baranowska",
    avatar: "https://api.adorable.io/avatars/7",
  },
  {
    id: 7,
    name: "Felicja Chmielewska",
    avatar: "https://api.adorable.io/avatars/8",
  },
  {
    id: 8,
    name: "Natalia Szewczyk",
    avatar: "https://api.adorable.io/avatars/9",
  },
  {
    id: 9,
    name: "Jagoda Kwiatkowska",
    avatar: "https://api.adorable.io/avatars/10",
  },
  {
    id: 10,
    name: "Balbina Kaczmarczyk",
    avatar: "https://api.adorable.io/avatars/11",
  },
  {
    id: 11,
    name: "Ludwik Sadowska",
    avatar: "https://api.adorable.io/avatars/12",
  },
  {
    id: 12,
    name: "Rafał Kaźmierczak",
    avatar: "https://api.adorable.io/avatars/13",
  },
  {
    id: 13,
    name: "Przemysław Nowak",
    avatar: "https://api.adorable.io/avatars/14",
  },
  {
    id: 14,
    name: "Adam Nowak",
    avatar: "https://api.adorable.io/avatars/15",
  },
  {
    id: 15,
    name: "Klaudiusz Walczak",
    avatar: "https://api.adorable.io/avatars/16",
  },
  {
    id: 16,
    name: "Martin Laskowska",
    avatar: "https://api.adorable.io/avatars/17",
  },
  {
    id: 17,
    name: "Ignacy Kołodziej",
    avatar: "https://api.adorable.io/avatars/18",
  },
  {
    id: 18,
    name: "Kuba Makowski",
    avatar: "https://api.adorable.io/avatars/19",
  },
  {
    id: 19,
    name: "Artur Sokołowski",
    avatar: "https://api.adorable.io/avatars/20",
  },
];

const tags = [
  { id: 1, name: "inspiracja" },
  { id: 2, name: "praca" },
  { id: 3, name: "rozwojosobisty" },
  { id: 4, name: "biznes" },
  { id: 5, name: "motywacja" },
  { id: 6, name: "wiedza" },
  { id: 7, name: "kawa" },
];

app.get("/kudos", (req, res) => {
  // Timeout added for loader testing purpose
  setTimeout(() => {
    res.send(kudosList);
  }, 1000);
});
app.post("/kudos", (req, res) => {
  const newKudos = {
    ...req.body,
    id: kudosList.length,
    likes: Math.floor(Math.random() * 10) + 1,
    comments: Math.floor(Math.random() * 10) + 1,
    created: new Date().toISOString(),
    person: people.find(({ id }) => id === req.body.person) || people[0],
    author: people[Math.floor(Math.random() * (people.length - 1)) + 1],
  };
  console.log("Added:");
  console.log(JSON.stringify(newKudos));
  kudosList.push(newKudos);
  res.send({ status: 201 });
});
app.get("/people", (req, res) => res.send(people));
app.get("/tags", (req, res) => res.send(tags));

app.listen(port, () => console.log("Server is running..."));
