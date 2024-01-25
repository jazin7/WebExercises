const express = require("express");
const fs = require('fs');
const cors = require('cors');

var app = express();
app.use(express.json());
app.use(cors());

app.get("/myMovies", (req, res) => {
    var filmList = fs.readFileSync("./myMovies/spielfilme.json", "utf8");
    res.status(200);
    res.json(filmList);
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});
