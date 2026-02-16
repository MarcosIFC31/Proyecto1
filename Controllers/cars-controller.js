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
//Filtrado por id
exports.GetCarId = async (req, res) => {
    let CarId = parseInt(req.params.id);

    for (let i = 0; i < carsJson.length; i++) {
        let car = new cars(
            carsJson[i].id,
            carsJson[i].nombre,
            carsJson[i].modelos,
        )

        if (car.id === CarId) {
            return res.json(car)
        }
    }
}