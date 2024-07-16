fetch('http://localhost:8080/app/pelicula')
.then(response => response.json())
.then(data => {
  const moviesGrid = document.getElementById('moviesGrid');

  data.forEach(movie => {
    const movieDiv = document.createElement('div');
    movieDiv.classList.add('movie');

    const movieImg = document.createElement('img');
    movieImg.src = movie.imagen;
    movieImg.alt = movie.titulo;

    const movieTitle = document.createElement('div');
    movieTitle.classList.add('movieTittle');
    movieTitle.innerHTML = `<h5>${movie.titulo}</h5>`;

    movieDiv.appendChild(movieImg);
    movieDiv.appendChild(movieTitle);

    moviesGrid.appendChild(movieDiv);
  });
})
.catch(error => console.error('Error fetching movies:', error));