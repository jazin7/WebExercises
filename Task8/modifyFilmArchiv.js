const titleInput = document.querySelector('#filmTitelInput');
const datumInput = document.querySelector('#filmDatumInput');
const regieInput = document.querySelector('#filmRegieInput');
const addBttn = document.querySelector('#addFilm');
const deleteBttn = document.querySelector('#deleteFilm');

addBttn.addEventListener('click', function() {
    fetch("http://localhost:8080/myMovies", {
        method: "put",
        body: JSON.stringify({
            titel: titleInput.value,
            datum: datumInput.value,
            regie: regieInput.value
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
});

deleteBttn.addEventListener('click', function() {
    fetch("http://localhost:8080/myMovies", {
        method: "delete",
        body: JSON.stringify({
            titel: titleInput.value
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
});
