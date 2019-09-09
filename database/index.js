const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "timeIt"
});

connection.connect();

// const insertMany = function (timers, cb = (err) => { }) {
//   let queryString = 'INSERT INTO timers (title, hours, minutes, seconds) VALUES ';
//   let values = timers.map(timer => `("${timer.title}", "${timer.hours}", "${timer.minutes}", "${timer.seconds}")`);
//   queryString = queryString.concat(values.join(', '), ';');
//   connection.query(queryString, cb);
// };

const selectAll = function(cb) {
  return connection.query("SELECT * FROM timers", cb);
};

//how do you select one from list in mysql
// const readOne = (id, callback) => {
//   var text = items[id];
//   if (!text) {
//     callback(new Error(`No item with id: ${id}`));
//   } else {
//     callback(null, { id, text });
//   }
// };

const readOne = function(id, cb) {
  let sql = "SELECT * FROM timers WHERE id = ?";
  connection.query(sql, [id], (error, result) => {
    if (error) {
      cb(console.error(error.message));
    } else {
      cb(null, result);
    }
  });
};

const insertOne = function(timer, cb) {
  connection.query("INSERT IGNORE INTO timers SET ?", timer, cb);
};

const deleteOne = function(id, cb) {
  let sql = "DELETE FROM timers WHERE id = ?";
  connection.query(sql, [id], (error, result) => {
    if (error) {
      cb(console.error(error.message));
    } else {
      cb(null, result);
    }
  });
};

module.exports = {
  // insertMany,
  selectAll,
  insertOne,
  readOne,
  deleteOne
};
