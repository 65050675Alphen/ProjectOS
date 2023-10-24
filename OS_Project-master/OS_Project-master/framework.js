const express = require('express');
const app = express();
const url = require('url');
const path = require('path');
const mysql = require('mysql2');
const http = require("http").createServer(app);
const { Server } = require("socket.io");
const crypto = require('crypto');
const io = new Server(http);

const port = 8080;

var con = mysql.createConnection({
  host: "localhost",
  user: "movie",
  password: "16180339887",
  database: "movie"
});

app.use(express.static('test'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'test/Login.html'));
})

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
  socket.on('submitted', (email, pass) => {
    pass = hash(pass);
    console.log(email + " " + pass);
    con.connect((err) => {
      if (err) throw err;
      console.log("Database Connected");
      con.query('SELECT * FROM users WHERE email = ' + "'" + String(email) + "';", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        if (result.length == 0) {
          socket.emit('email');
        } else if (result[0].password != pass) {
          socket.emit('pass');
        } else {
          socket.emit('success', result[0].email);
        }
      });
    });
  })
  socket.on('register', (email, pass) => {
    pass = hash(pass);
    con.connect((err) => {
      if (err) throw err;
      console.log("Database Connected");
      con.query('SELECT * FROM users WHERE email = ' + "'" + String(email) + "';", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        if (result.length == 0) {
          con.query("INSERT INTO users VALUES('" + email + "','" + pass + "');");
          socket.emit('registered');
        } else {
          socket.emit('duplicated');
        }
      });
    });
  })
});

function hash(password) {
  return crypto.createHash('sha1').update(password).digest('hex');
}

http.listen(port, () => {
  console.log("Server Running and Listening");
})