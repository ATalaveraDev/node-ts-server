let server = require('./server');
let mongoose = require('mongoose');
let db = require('./config/db');

let app = server.start().app;
server.createRoutes(app);

mongoose.connect(db.url);

app.listen(8081, () => {
  console.log('Listening');
});