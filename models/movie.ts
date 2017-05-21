import { Document, Schema, model } from 'mongoose';

class Movie {
  private movieSchema;
  movieModel;

  constructor() {
    this.movieSchema = new Schema({
      title: String,
      status: String
    });

    this.movieModel = model('movie', this.movieSchema);
  }
}

let mov = new Movie();

export = mov.movieModel;