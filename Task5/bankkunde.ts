class Kunde{
    private _name: string;
    constructor(name: string){
        this._name= name;
    }
    getName(): string {
        return this._name;
    }
}

class Bank{
    private _name: string;
    private _bankleitzahl: string;
    private _kunden: Kunde[] = [];

    constructor(name: string, bankleitzahl: string) {
        this._name = name;
        this._bankleitzahl = bankleitzahl;
    }

    getName(): string {
        return this._name;
    }
    getBankleitzahl(): string {
        return this._bankleitzahl;
    }
    getKunden(): Kunde[]{
        return this._kunden;
    }

    addKunde(kunde: Kunde){
        this._kunden.push(kunde);
    }
}

var alice = new Kunde("Alice");
var bob = new Kunde("Bob");
var oscar = new Kunde("Oscar");

var postbank = new Bank("Postbank", "45277");
postbank.addKunde(alice);
postbank.addKunde(bob);
postbank.addKunde(oscar);
var Kunden : Kunde[] = postbank.getKunden();

for (let kunde of Kunden) {
    console.log(kunde.getName());
}
