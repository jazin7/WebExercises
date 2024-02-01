const Sequelize = require('sequelize');

const sequelize = new Sequelize("mysql://root:@localhost:3306/CoffeeShopDB");

class Shop extends Sequelize.Model {}
Shop.init({
    shopName: Sequelize.STRING,
    openAt: Sequelize.TIME,
    closeAt: Sequelize.TIME
}, { sequelize, modelName: 'shop' });


class Coffee extends Sequelize.Model {}
Coffee.init({
    coffeeName: Sequelize.STRING,
    price: Sequelize.FLOAT
}, { sequelize, modelName: 'coffee' });


Shop.hasMany(Coffee);
Coffee.belongsTo(Shop);

sequelize.sync({ force: true }).then(() => {
    let dataTransfer = async () => {
        const coffeeHouse = await Shop.create({
            id : 6,
            shopName : "Manhattan Mug",
            openAt: "09:00",
            closeAt: "18:00"
    });
        const coffee1 = await Coffee.create({
            coffeeName: 'Cappuccino',
            price: 2.50
        }).then(coffee => {
            coffee.setShop(coffeeHouse);
            });
        const coffee2 = await Coffee.create({
            coffeeName: 'Latte Macchiato',
            price: 3.25
            }).then(coffee => {
            coffee.setShop(coffeeHouse);
        });
        const coffee3 = await Coffee.create({
            coffeeName: 'Espresso',
            price: 3.00
    }).then(coffee => {
            coffee.setShop(coffeeHouse);
        });
        sequelize.close();
    };
    dataTransfer();
});
