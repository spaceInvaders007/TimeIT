const express = require("express");
const app = express();
const db = require("../database/index.js");
//const bodyParser = require('body-parser');

// const path = require('path');
// //const retrieve = require('../lib/movieAPI.js').retrieve;
app.use(express.urlencoded());
app.use(express.json());
// // app.use(express.static(path.join(__dirname, '../public')));

// app.get('/load', async (req, res) => {
//   try {
//     let data = await retrieve();
//     let timers = data.results;
//     db.insertMany(timers, (err) => {
//       if (err) console.error('error inserting, maybe duplicates');
//       res.end();
//     });
//   } catch (err) {
//     console.error('error here');
//   }
// });

// app.get('/timers', async (req, res) => {
//   db.selectAll((err, timers) => {
//     if (err) throw err;
//     res.json(timers);
//   });
// });

// app.post('/movie', (req, res) => {
//   db.insertOne(req.body);
//   res.status(201).end();
// });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/timers", async (req, res) => {
  db.selectAll((err, timers) => {
    if (err) throw err;
    res.json(timers);
  });
});

app.post("/timers", async (req, res) => {
  //console.log(req.body, 'this is the log from the server post function')
  db.insertOne(req.body);

  res.sendStatus(201).end();
});

app.get("/timers/:id", async (req, res) => {
  db.readOne(req.params.id, (err, timer) => {
    if (timer) {
      res.status(200).json(timer);
    } else {
      res.sendStatus(404);
    }
  });
});

app.delete("/timers/:id", async (req, res) => {
  db.deleteOne(req.params.id, (err, timer) => {
    if (timer) {
      res.status(200).json(timer);
    } else {
      res.sendStatus(404);
    }
  });
});

app.put("/timers/:id", async (req, res) => {
  console.log(req.body);
  console.log("it reached update function on server");
  db.updateOne(req.body, (err, timer) => {
    if (timer) {
      res.status(200).json(timer);
    } else {
      res.sendStatus(404);
    }
  });
});
