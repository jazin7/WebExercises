const previousBttn = document.querySelector("#previous");
const nextBttn = document.querySelector("#next");

var filmIndex = 0;
var globalfilmLength;
displayFilm();
function displayFilm(){
    fetch("http://localhost:8080/myMovies",{
        method:"get",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then(function(response){
        response.json().then(function(data){
            let filmListe = JSON.parse(data);
            showFilmDetails(filmListe);
            globalfilmLength = filmListe.filme.length;
        });
    });
}
function showFilmDetails(filmListePar){
    document.querySelector("#film").innerHTML =
        "Titel: "+filmListePar.filme[filmIndex].titel + "<br>"+
        "Datum: "+filmListePar.filme[filmIndex].datum + "<br>"+
        "Regie: "+filmListePar.filme[filmIndex].regie;
}
previousBttn.addEventListener("click", function(){
    displayFilm();
    if (filmIndex >= 1) {
        filmIndex--;
    }
});
nextBttn.addEventListener("click", function(){
    displayFilm();
    if (filmIndex <= globalfilmLength-2) {
        filmIndex++;
    }
});