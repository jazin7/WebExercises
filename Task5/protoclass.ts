class Gegenstand {
    protected _bezeichner: string;
    protected _gewicht: number;
    constructor(bezeichner: string, gewicht: number) {
        this._bezeichner = bezeichner;
        this._gewicht = gewicht;
    }
    getBeschreibung(): void {
        console.log(this._bezeichner);
    }
    getGewicht(): void {
        console.log(this._gewicht + "gramm");
    }
}

class Kugel extends Gegenstand {
    private _radius: number;
    constructor(bezeichner: string, gewicht: number, radius: number){
        super(bezeichner, gewicht);
        this._radius = radius;
    }
    getBeschreibung() {
        console.log(this._bezeichner);
        console.log("Oberfläche: " + (4 * Math.PI * Math.pow(this._radius,2)));
    }
}

class Wuerfel extends Gegenstand {
    private _seitenlaenge: number;
    constructor(bezeichner: string, gewicht: number, seitenlaenge: number){
        super(bezeichner, gewicht);
        this._seitenlaenge = seitenlaenge;
    }
    getBeschreibung() {
        console.log(this._bezeichner);
        console.log("Oberfläche" + (6 * Math.pow(this._seitenlaenge,2)));
    }
}

var eineKugel = new Kugel("eine Kugel", 4, 2);
var einWuerfel = new Wuerfel("ein Würfel", 5, 2);


eineKugel.getBeschreibung();
eineKugel.getGewicht();

einWuerfel.getBeschreibung();
einWuerfel.getGewicht();