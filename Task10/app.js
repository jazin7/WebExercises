const Sequelize = require('sequelize');

const sequelize = new Sequelize("mysql://root:@localhost:3306/consultingdb");

class Firma extends Sequelize.Model {}
Firma.init({
    titel: Sequelize.STRING
    }, { sequelize, modelName: 'firma' });
class Mitarbeiter extends Sequelize.Model {}
Mitarbeiter.init({
    vnname: Sequelize.STRING,
    beitritt: Sequelize.DATE
}, { sequelize, modelName: 'mitarbeiter' });
class Projekt extends Sequelize.Model {}
Projekt.init({
    titel: Sequelize.STRING
}, { sequelize, modelName: 'projekt' });

Firma.hasMany(Mitarbeiter);
Mitarbeiter.belongsTo(Firma);

class MitarbeiterProjektRelation extends Sequelize.Model {}
MitarbeiterProjektRelation.init(
    { rolle : Sequelize.STRING },
    { sequelize, modelName: 'mitarbeiter_projekt' }
);

Mitarbeiter.belongsToMany(Projekt, { through: MitarbeiterProjektRelation });
Projekt.belongsToMany(Mitarbeiter, { through: MitarbeiterProjektRelation });

sequelize.sync({ force: true }).then(() => {
    let sxnA = async () => {
        const firmaA = await Firma.create({
            id : 3,
            titel : "Web-App Consolting Bochum"
            });
        const michaela = await Mitarbeiter.create({
            vnname: 'Michaela Lehr',
            beitritt: new Date(1992, 10, 20)
            }).then(mitarbeiter => {
            mitarbeiter.setFirma(firmaA); //Setzen des Foreign Key muss auf Firma warten
        });
        const michael = await Mitarbeiter.create({
            vnname: 'Michael Wanyolke',
            beitritt: new Date(2002, 5, 2)
        }).then(mitarbeiter => {
            mitarbeiter.setFirma(firmaA); //Setzen des Foreign Key muss auf Firma warten
        });

        const james = await Mitarbeiter.create({
            vnname: 'James Hibbard',
            beitritt: new Date(2010, 4, 1)
        }).then(mitarbeiter => {
            mitarbeiter.setFirma(firmaA); //Setzen des Foreign Key muss auf Firma warten
        });
        const karolina = await Mitarbeiter.create({
            vnname: 'Karolina Gawron',
            beitritt: new Date(2020, 4, 1)
        }).then(mitarbeiter => {
            mitarbeiter.setFirma(firmaA); //Setzen des Foreign Key muss auf Firma warten
        });
        const projektABCNavi = await Projekt.create({
            id: 21,
            titel: 'ABC Navigator'
        });
        const projektFacility = await Projekt.create({
            id: 22,
            titel: 'Facility Manager 2.0'
        });
        const rolle1 = await MitarbeiterProjektRelation.create({
            rolle: 'PL',
            mitarbeiterId: 1,
            projektId: 21
        });
        const rolle2 = await MitarbeiterProjektRelation.create({
            rolle: 'PL',
            mitarbeiterId: 2,
            projektId: 22
            });
        const rolle3 = await MitarbeiterProjektRelation.create({
            rolle: 'QM',
            mitarbeiterId: 3,
            projektId: 21
        });
        const rolle4 = await MitarbeiterProjektRelation.create({
            rolle: 'PM',
            mitarbeiterId: 4,
            projektId: 21
        });

        sequelize.close();

    }; sxnA();
});
