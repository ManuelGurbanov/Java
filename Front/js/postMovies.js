document.addEventListener('DOMContentLoaded', async () => {
    const formNuevaPelicula = document.getElementById('addMovieForm');
    formNuevaPelicula.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(formNuevaPelicula);
        const tittle = formData.get('tittle');
        const genre = formData.get('genre');
        const duration = formData.get('duration');
        const img = formData.get('img');
        if (tittle === '' || genre === '' || duration === '' || img === '') {
            alert('Todos los campos son obligatorios');
            return;
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                titulo: tittle,
                genero: genre,
                duracion: duration,
                imagen: img
            })
        };
        const response = await fetch('http://localhost:8080/app/pelicula', options);
        const data = await response.json();
        if (response.status === 201) {
            alert('Pelicula agregada correctamente');
            formNuevaPelicula.reset();
            location.reload();
        } else {
            alert('Error al agregar la pelicula');
        }
    });
});