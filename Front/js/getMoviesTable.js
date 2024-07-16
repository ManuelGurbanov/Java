fetch('http://localhost:8080/app/pelicula')
.then(response => response.json())
.then(data => {
  const moviesTableBody = document.querySelector('#moviesTable tbody');

  data.forEach(movie => {
    const movieRow = document.createElement('tr');
    movieRow.classList.add('movieRow');

    movieRow.innerHTML = `
      <th scope="row">${movie.id}</th>
      <td>${movie.titulo}</td>
      <td>${movie.genero}</td>
      <td>${movie.duracion}</td>
      <td><img src="${movie.imagen}" alt="${movie.titulo}" class="movie-image"></td>
    `;
    moviesTableBody.appendChild(movieRow);
  });
})
.catch(error => console.error('Error fetching movies:', error));