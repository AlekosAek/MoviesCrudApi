document.querySelector('.addBtn').addEventListener('click', (e) => {
  e.preventDefault(); // Prevent the form from submitting

  let title = document.getElementById('title').value;
  let year = document.getElementById('year').value;
  let actors = document.getElementById('actors').value;
  let director = document.getElementById('director').value;
  let awards = document.getElementById('awards').value;

  let newMovie = {
    title: title,
    year: year,
    actors: actors,
    director: director,
    awards: awards
  };

  // Retrieve movies from localStorage or initialize an empty array
  let myMovies = JSON.parse(localStorage.getItem('myMovies')) || [];

  // Add the new movie to the list
  myMovies.push(newMovie);

  // Save the updated movies array back to localStorage
  localStorage.setItem('myMovies', JSON.stringify(myMovies));


  alert('Movie added successfully!');
});