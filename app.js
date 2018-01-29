const express = require('express'); // just like an include or require with PHP
const app = express(); // create an instance of our application via simpleExpress


app.use(express.static('public'));

app.use(require('./routes/index'));
app.use(require('./routes/contact'));
app.use(require('./routes/users'));


app.listen(3000, () => {
  console.log('listening on port 3000!');
});
