let movieToEdit = {};
let myMovies = [];
let titleInputEl = document.getElementById('title');
let yearInputEl = document.getElementById('year');
let actorsInputEl = document.getElementById('actors');
let directorInputEl = document.getElementById('director');
let awardsInputEl = document.getElementById('awards');

load();

function load() {
  movieToEdit = JSON.parse(localStorage.getItem('movieToEdit'));
  myMovies=JSON.parse(localStorage.getItem('myMovies'));
  showEditToUI();
}

function showEditToUI() {
  titleInputEl.value = movieToEdit.title;
  yearInputEl.value = movieToEdit.year;
  actorsInputEl.value = movieToEdit.actors;
  directorInputEl.value = movieToEdit.director;
  awardsInputEl.value = movieToEdit.awards;
}
document.querySelector('.update').addEventListener('click', (e) => {
  let newTitle = titleInputEl.value;
  let newYear = yearInputEl.value;
  let newActors = actorsInputEl.value;
  let newDirector = directorInputEl.value;
  let newAwards = awardsInputEl.value;
  console.log(newTitle, newYear, newActors, newDirector, newAwards)
  movieToEdit.title = newTitle;
  movieToEdit.year = newYear;
  movieToEdit.actors = newActors;
  movieToEdit.Director = newDirector;
  movieToEdit.awards = newAwards;
  localStorage.setItem('movieToEdit', JSON.stringify(movieToEdit));
  let index= myMovies.findIndex((myMovie)=>myMovie.Id===movieToEdit.Id);
  myMovies.splice(index,1,movieToEdit);
  localStorage.setItem('myMovies',JSON.stringify(myMovies));
  e.preventDefault;
})

document.querySelector('.deleteBtn').addEventListener('click',(e)=>{
  let index= myMovies.findIndex((myMovie)=>myMovie.id===movieToEdit.id);
  myMovies.splice(index,1);
  localStorage.setItem('myMovies',JSON.stringify(myMovies));
  e.preventDefault();
})