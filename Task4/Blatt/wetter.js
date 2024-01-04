let wetterDaten = [
    [new Date(2020, 2, 1), 9, 61, 41],
    [new Date(2020, 2, 2), 7, 52, 38],
    [new Date(2020, 2, 3), 7, 45, 53],
    [new Date(2020, 2, 4), 5, 49, 65],
    [new Date(2020, 2, 5), 8, 55, 57],
    [new Date(2020, 2, 6), 12, 75, 42],
    [new Date(2020, 2, 7), 11, 80, 47],
    [new Date(2020, 2, 8), 13, 63, 50]
    ];


const checkDatum = (datum1, datum2) => {
    return datum1.getTime() <= datum2.getTime();
};

const wetterDatenIterator = {
    currentIndex : 0,
    [Symbol.iterator]: () => {
        return{
            next: () =>{
            if (wetterDatenIterator.currentIndex < wetterDaten.length){
                wetterDatenIterator.currentIndex++;
                return {
                    value: {
                        datum : wetterDaten[wetterDatenIterator.currentIndex-1][0],
                    temperatur : wetterDaten[wetterDatenIterator.currentIndex-1][1],
                    windstaerke : wetterDaten[wetterDatenIterator.currentIndex-1][2],
                    luftfeuchtigkeit :wetterDaten[wetterDatenIterator.currentIndex-1][3]},
                done : false}
                }
            return{ done: true }
        }
    }
}};

let subSetTemparatur = [];
let subSetWindstaerke = [];
let subSetLuftfeuchtigkeit = [];



for(const wetter of wetterDatenIterator){
    let anfangsDatum = new Date(2020, 2, 1);
    let endDatum = new Date(2020, 2, 3);
    if(checkDatum(anfangsDatum, wetter.datum) &&
        checkDatum(wetter.datum, endDatum)){
        subSetTemparatur.push(wetter.temperatur);
        subSetWindstaerke.push(wetter.windstaerke);
        subSetLuftfeuchtigkeit.push(wetter.luftfeuchtigkeit);
    }
}

const calcMittelwert = (werte) => {
    let sum = 0.0;
    for(let i in werte){
        sum += Number.parseFloat(werte[i]);
        }
    return (sum / werte.length);
};

console.log("Tem. Mittelwert: " + calcMittelwert(subSetTemparatur));
console.log("Wind. Mittelwert: " + calcMittelwert(subSetWindstaerke));
console.log("Luft. Mittelwert: " + calcMittelwert(subSetLuftfeuchtigkeit));