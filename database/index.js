const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'timeIt'
});
   
connection.connect();

const insertMany = function (timers, cb = (err) => { }) {
  let queryString = 'INSERT INTO timers (title, hours, minutes, seconds) VALUES ';
  let values = timers.map(timer => `("${timer.title}", "${timer.hours}", "${timer.minutes}", "${timer.seconds}")`);
  queryString = queryString.concat(values.join(', '), ';');
  connection.query(queryString, cb);
};

const selectAll = function (cb) {
  return connection.query('SELECT * FROM timers', cb);
};

// const insertOne = function (timer, cb) {
//   connection.query('INSERT INTO `timers` (title, hours,minutes, seconds) VALUES (?)', (timer, cb);
// };

const insertOne = function (timer, cb) {
  connection.query('INSERT IGNORE INTO timers SET ?', timer, cb);
};

// const insertOne = function (timer, cb) {
//   console.log(timer, 'this is the log from the index database function');
// };


// const insertOne = function (params, cb) {
//   let sql = 'INSERT INTO `timers` (title, hours,minutes, seconds) VALUES (?)';
//   connection.query(sql, params, function (err, result) {
//     if (err) {
//       throw err;
//     } else {
//       callback(results);
//       console.log('1 record inserted')
//     }
//   });
// };





// function (params, callback) {
//       var sql = `INSERT INTO users (name) VALUES
//                   ( ? )`;
//       db.query(sql, params, function (err, result){
//         if (err) {
//           throw err;
//         } else {
//           callback(results);
//           console.log("1 record inserted");
//         }
//       });
//     }


module.exports = {
  insertMany,
  selectAll,
  insertOne
};
