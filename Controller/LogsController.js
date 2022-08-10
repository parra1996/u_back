const LogsController = {}

const datos = require('../tete.json');
const filename = '../logs.txt';
const fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, filename);

LogsController.getAll = (req, res) => {

    try {
        var data = fs.readFileSync(filePath, 'utf8');
        /*
        aqui tiene que estar el codigo para leer el archivo linea a linea 
        */

        res.send(data);

    } catch (err) {
        console.log('err: ' + err);
    }

}

LogsController.getLogs = () => {

}

module.exports = LogsController;