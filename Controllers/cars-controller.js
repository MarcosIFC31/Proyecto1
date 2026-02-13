const fs = require('fs');
const cars = require('../Models/cars');
const carsJson = require('../Data/cars.json')

exports.listacars = async (req, res) => {
    let listacars = []

    for (let i = 0; i < carsJson.length; i++) {
        let uncars = new cars(
            carsJson[i].id,
            carsJson[i].nombre,
            carsJson[i].modelos,
        );
        listacars.push(uncars);
    }
    return res.json(listacars);
}