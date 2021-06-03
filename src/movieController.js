import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

export const home = (req, res) => {
  return res.render("home", {pageTitle: 'Movies', getMovies});
};

export const movieDetail = (req, res) => {
  const {id} = req.params;
  const movie = getMovieById(id);
  return res.render("movie", {pageTitle: movie.title, movie});
};

export const filterMovie = (req, res) => {
  const year = req.query.year;
  const rating = req.query.rating;
  return res.render('filter', {year, rating, getMovieByMinimumRating, getMovieByMinimumYear});
}

export const getAdd = (req, res) => {
  return res.render('add', {pageTitle: 'Add Movie'});
}
export const postAdd = (req, res) => {
  const genres = req.body.genres;
  const addMovie = {
    title: req.body.title,
    synopsis: req.body.synopsis,
    genres: genres.split(','),
    id: Math.floor(Math.random()*29999),
  };
  getMovies().push(addMovie);
  return res.redirect('/');
}