"use strict";
class Gegenstand {
    constructor(bezeichner, gewicht) {
        this._bezeichner = bezeichner;
        this._gewicht = gewicht;
    }
    getBeschreibung() {
        console.log(this._bezeichner);
    }
    getGewicht() {
        console.log(this._gewicht + "gramm");
    }
}
class Kugel extends Gegenstand {
    constructor(bezeichner, gewicht, radius) {
        super(bezeichner, gewicht);
        this._radius = radius;
    }
    getBeschreibung() {
        console.log(this._bezeichner);
        console.log("Oberfläche: " + (4 * Math.PI * Math.pow(this._radius, 2)));
    }
}
class Wuerfel extends Gegenstand {
    constructor(bezeichner, gewicht, seitenlaenge) {
        super(bezeichner, gewicht);
        this._seitenlaenge = seitenlaenge;
    }
    getBeschreibung() {
        console.log(this._bezeichner);
        console.log("Oberfläche" + (6 * Math.pow(this._seitenlaenge, 2)));
    }
}
var eineKugel = new Kugel("eine Kugel", 4, 2);
var einWuerfel = new Wuerfel("ein Würfel", 5, 2);
eineKugel.getBeschreibung();
eineKugel.getGewicht();
einWuerfel.getBeschreibung();
einWuerfel.getGewicht();
