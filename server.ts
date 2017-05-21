import * as express from 'express';
import { Router } from 'express';

import bodyParser = require('body-parser');
import methodOverride = require('method-override');
import routes = require('./routes');

class Server {
  private app: express.Application;

  constructor() {
    this.app = express();

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: true}));
    this.app.use(methodOverride('X-HTTP-Method-Override'));
    this.app.use(express.static('public/src/'));
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

      next();
    });
  }

  public static start(): Server  {
    return new Server();
  }

  public static createRoutes(app: Router): void {
    routes.create(app);

    app.all('/*', (req, res) => {
      res.sendFile('index.html', {root: 'public/src/'});
    });
  }
}

export = Server;