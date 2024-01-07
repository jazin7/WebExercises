var Gegenstand = {
    bezeichner: null,
    gewicht: null,
    getBeschreibung: function() {
        console.log(this.bezeichner);
    },
    getGewicht: function() {
        console.log(this.gewicht, "g");
    }
}

var Kugel = Object.create(Gegenstand);
Kugel.radius = null;
Kugel.getBeschreibung = function() {
    console.log(this.bezeichner);
    console.log("Oberfläche: " + 4 * Math.PI * Math.pow(this.radius, 2));
}

var Wuerfel = Object.create(Gegenstand);
Wuerfel.seitenlaenge = null;
Wuerfel.getBeschreibung = function() {
    console.log(this.bezeichner);
    console.log("Oberfläche: " + 6 * this.seitenlaenge * this.seitenlaenge);
}


var eineKugel = Object.create(Kugel, {
    bezeichner: { value: "eine Kugel" },
    gewicht: { value: 4 },
    radius: { value: 2 }
});


var einWuerfel = Object.create(Wuerfel, {
    bezeichner: { value: "ein Würfel" },
    gewicht: { value: 5 },
    seitenlaenge: { value: 2 }
});


eineKugel.getBeschreibung();
eineKugel.getGewicht();


einWuerfel.getBeschreibung();
einWuerfel.getGewicht();
