const express = require('express'); // just like an include or require with PHP
const app = express(); // create an instance of our application via simpleExpress
const io = require('socket.io')();

app.use(express.static('public'));

app.use(require('./routes/index'));
app.use(require('./routes/contact'));
app.use(require('./routes/users'));


const server = app.listen(3000, () => {
  console.log('listening on port 3000!');
});


io.attach(server);

io.on('connection', (socket)=>{
  console.log('a user has connected...');
  io.emit('conectMsg',{ for: 'everyone', msg: `${socket.id} is here!`});

  socket.on('disconnect', ()=> {
    console.log('a user has disconnected')
  });
});