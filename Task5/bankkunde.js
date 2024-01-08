"use strict";
class Kunde {
    constructor(name) {
        this._name = name;
    }
    getName() {
        return this._name;
    }
}
class Bank {
    constructor(name, bankleitzahl) {
        this._kunden = [];
        this._name = name;
        this._bankleitzahl = bankleitzahl;
    }
    getName() {
        return this._name;
    }
    getBankleitzahl() {
        return this._bankleitzahl;
    }
    getKunden() {
        return this._kunden;
    }
    addKunde(kunde) {
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
var Kunden = postbank.getKunden();
for (let kunde of Kunden) {
    console.log(kunde.getName());
}
