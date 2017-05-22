import { Router } from 'express';
import Movie = require('./models/movie');

class Routes {
  private MAX_PER_PAGE: number = 2;

  constructor(app: Router) {
    app.post('/movies', (req, res) => {
      let movie = new Movie();

      movie.title = req.body.title;
      movie.status = req.body.status;

      movie.save().then(function (result) {
        res.send(result);
      });
    });

    app.get('/movies', (req, res) => {
      Movie.find().then(result => {
        res.send(result);
      });
    });

    app.delete('/movies/:id', (req, res) => {
      Movie.findByIdAndRemove(req.params.id, {}, (req, result) => {
        res.send(result);
      });
    });
  }

  public static create(app: Router): Routes {
    return new Routes(app);
  }
}

export = Routes;