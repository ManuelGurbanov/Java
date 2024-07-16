fetch('http://localhost:8080/app/pelicula')
.then(response => response.json())
.then(data => {
  const moviesTable = document.getElementById('moviesTable');

  data.forEach(movie => {
    const movieRow = document.createElement('th');
    movieRow.classList.add('movieRow');

    movieRow.innerHTML = '<tr> <th scope="row">' + movie.id + '</th> <td>' + movie.titulo + '</td> <td>' + movie.genero + '</td> <td>' + movie.duracion + '</td> <td>' + movie.imagen + '</td> </tr>';
    moviesTable.appendChild(movieRow);
  });
})
.catch(error => console.error('Error fetching movies:', error));