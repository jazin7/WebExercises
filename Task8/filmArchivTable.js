const showAllFilmBttn = document.querySelector("#allFilms");

showAllFilmBttn.addEventListener("click", function(){
    fetch("http://localhost:8080/myMovies", {
        method:"get",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then(function(response){
        response.json().then(function(data){
            let filmListe = JSON.parse(data);
            showFilmTable(filmListe);
        });
    });
});

const showFilmTable = (filmListe) => {
    let table = "<tr><th>Title</th><th>Erscheinungsdatum</th><th>Regie</th></tr>";

    for (let i = 0; i < filmListe.filme.length; i++) {
        table += "<tr><td>" +
            filmListe.filme[i].titel + "</td><td>" +
            filmListe.filme[i].datum + "</td><td>" +
            filmListe.filme[i].regie + "</td></tr>";
    }
    document.getElementById("filmTable").innerHTML = table;
}
