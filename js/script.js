
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

let PersonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let nameOfFilm = prompt('Один из последних фильмов?'),
    OfFilm = prompt('На сколько его оцените'),
    nameOfFilm2 = prompt('Один из последних фильмов?'),
    OfFilm2 = prompt('На сколько его оцените');

PersonalMovieDB.movies[nameOfFilm] = OfFilm;
PersonalMovieDB.movies[nameOfFilm2] = OfFilm2;

console.log(PersonalMovieDB);