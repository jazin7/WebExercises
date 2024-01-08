"use strict";
class Speiseplan {
    static speiseHinzufuegen(speise) {
        if (this.speiseListe.includes(speise)) {
            alert("Die Speise ist bereits in der Liste!");
        }
        else {
            this.speiseListe.push(speise);
        }
    }
    static speiseEntfernen(speise) {
        if (this.speiseListe.includes(speise)) {
            const index = this.speiseListe.indexOf(speise); // index der speise
            this.speiseListe.splice(index, 1);
        }
        else {
            alert(speise + " ist nicht im Menü.");
        }
    }
    static ausgabe() {
        var speiseplan = document.querySelector("#Speiseplan");
        speiseplan.innerHTML = "";
        for (let einzelneSpeise of Speiseplan.speiseListe) {
            speiseplan.innerHTML += einzelneSpeise + "<br>";
        }
    }
}
Speiseplan.speiseListe = [];
var speiseEingabe = document.querySelector("#speiseEingabe");
var hinzufuegen = document.querySelector("#hinzufuegen");
var entfernen = document.querySelector("#entfernen");
hinzufuegen.addEventListener("click", function () {
    let item = speiseEingabe.value;
    Speiseplan.speiseHinzufuegen(item);
    Speiseplan.ausgabe();
});
entfernen.addEventListener("click", function () {
    let item = speiseEingabe.value;
    Speiseplan.speiseEntfernen(item);
    Speiseplan.ausgabe();
});
