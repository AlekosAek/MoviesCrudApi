const api = "https://freetestapi.com/api/v1/movies";

async function getMovies() {
  let myMovies = JSON.parse(localStorage.getItem('myMovies'));
  if (myMovies) {
    showMoviesToUi(myMovies);
  }
  else {
    const result = await fetch(api);
    const data = await result.json();
    console.log(data);
    // spara det vi fick från api till vår local storage
    const dataAsString = JSON.stringify(data);
    localStorage.setItem('myMovies', dataAsString);
    showMoviesToUi(data);

  }
}
getMovies();


function showMoviesToUi(movies) {
  const movieClassEl = document.querySelector('.movies-container')
  movies.forEach(movie => {
    console.log(movie);
    let articleEl = document.createElement('article');
    articleEl.className = 'movies-article';
    let title = document.createElement('h2');
    title.innerHTML = movie.title;
    let year = document.createElement('p');
    year.innerHTML = movie.year;
    let director = document.createElement('p');
    director.innerHTML = movie.director
    let awards = document.createElement('p');
    awards.innerHTML = movie.awards
    let actors = document.createElement('p');
    actors.innerHTML = movie.actors
    let editBtnEl = document.createElement('button');
    editBtnEl.innerText = 'Edit';
    editBtnEl.addEventListener('click', () => {
      let movieAsString = JSON.stringify(movie);
      localStorage.setItem("movieToEdit", movieAsString);
      document.location = "editMovie.html";
    })



    movieClassEl.appendChild(articleEl);
    articleEl.appendChild(title);
    articleEl.appendChild(year);
    articleEl.appendChild(actors);
    articleEl.appendChild(director);
    articleEl.appendChild(awards);
    articleEl.appendChild(editBtnEl);



  });

  document.querySelector('.goToAdd').addEventListener('click',()=>{
    document.location='addMovie.html'
  })
}


