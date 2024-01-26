const express = require("express");
const fs = require('fs');
const cors = require('cors');

var app = express();
app.use(express.json());
app.use(cors());

app.get('/myMovies', (req, res) => {
    var filmList = fs.readFileSync('./myMovies/spielfilme.json', 'utf8');
    res.status(200);
    res.json(filmList);
});

app.put('/myMovies', (req, res) => {
    var newFilm = req.body;
    var spielFilmeData = JSON.parse(fs.readFileSync('./myMovies/spielfilme.json', 'utf8'));

    spielFilmeData.filme.push(newFilm);
    spielFilmeData = JSON.stringify(spielFilmeData);
    fs.writeFileSync('./myMovies/spielfilme.json', spielFilmeData);

    res.status(201).send("Film added");
});

app.delete('/myMovies', (req, res) => {
    var filmToDelete = req.body;
    var filmFound = false;
    var spielFilmeData = JSON.parse(fs.readFileSync('./myMovies/spielfilme.json', 'utf8'));

    for (let film in spielFilmeData.filme) {
        if (filmToDelete.titel === spielFilmeData.filme[film].titel) {
            spielFilmeData.filme.splice(film, 1);
            spielFilmeData = JSON.stringify(spielFilmeData);
            fs.writeFileSync('./myMovies/spielfilme.json', spielFilmeData);
            filmFound = true;
            break;
        }
    }

    if (filmFound) {
        res.status(200).send("Film deleted");
    } else {
        res.status(400).send("No Film by that Name found");
    }
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});
