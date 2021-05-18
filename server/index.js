const next = require("next");
const express = require("express");
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const filePath = "./data.json";
const fs = require("fs");
const path = require("path");
const data = require(filePath);
const categories = require("./categories.json");

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

  server.get("/api/movies", (req, res) => {
    return res.json(data);
  });

  server.get("/api/categories", (req, res) => {
    return res.json(categories);
  });

  server.get("/api/movies/:id", (req, res) => {
    const movie = data.find((item) => item.id === req.params.id);

    return res.json(movie);
  });

  server.post("/api/movies", (req, res) => {
    const movie = req.body;
    data.push(movie);

    const pathToFile = path.join(__dirname, filePath);
    const stringifiedData = JSON.stringify(data, null, 2);

    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if (err) {
        return res.status(422).send(err);
      }

      return res.json("Movie has been successfully added!");
    });
  });

  server.delete("/api/movies/:id", (req, res) => {
    const { id } = req.params;

    const dataIdx = data.findIndex((item) => item.id === id);

    data.splice(dataIdx, 1);

    const pathToFile = path.join(__dirname, filePath);
    const stringifiedData = JSON.stringify(data, null, 2);

    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if (err) {
        return res.status(422).send(err);
      }

      return res.json("Movie has been successfully deleted!");
    });
  });

  // we are handling all of the request comming to our server
  server.get("*", (req, res) => {
    // next.js is handling requests and providing pages where we are navigating to
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log("> Ready on port " + PORT);
  });
});
