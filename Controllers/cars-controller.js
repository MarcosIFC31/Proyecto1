const fs = require('fs');
const cars = require('../models/cars');
const carsJson = require('../data/cars.json')

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