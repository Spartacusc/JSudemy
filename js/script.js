let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const PersonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        let nameOfFilm = prompt('Один из последних фильмов?'),
            OfFilm = prompt('На сколько его оцените');
    
        if ( nameOfFilm != null && OfFilm != null && nameOfFilm != '' && OfFilm != '' && nameOfFilm.length < 50) {
            PersonalMovieDB.movies[nameOfFilm] = OfFilm;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();


function detectionPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

// detectionPersonalLevel()

function showMyDB() {
    if (PersonalMovieDB.privat == false) {
        console.log(PersonalMovieDB);
    }
}


function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        PersonalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}?`));
    }
}

writeYourGenres()
showMyDB()