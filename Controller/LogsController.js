const LogsController = {}

// const datos = require('../tete.json');
const filename = '../textico.txt';

// const readline = require('readline');
const fs = require('fs'),
    path = require('path'),
    // readline = require('readline');
filePath = path.join(__dirname, filename);

const logs = [] ; 

LogsController.getAll =  (req, res) => {

    try {
        var data = fs.readFileSync(filePath, 'utf8');

        data =  data.split(/ +(?=(?:(?:[^"]*"){2})*[^"]*$)/g);

        const items = data.slice(0, 5)

        logs.push(items)

        console.log(logs, "ESTO ES LOGS")

        

        if(data.length > 0){ 
            console.log(data);
            res.send(data);
        }else {
            res.send('ERROR');
        
        }

        // const rl = readline.createInterface({
        //     input: fs.createReadStream(filePath),
        //     output: process.stdout,
        //     terminal: false
        // })

        // rl.on('line', (line) => {
        //     console.log(line);
        // });



        /*
        aqui tiene que estar el codigo para leer el archivo linea a linea 
        */


    } catch (err) {
        console.log('err: ' + err);
    }

}

LogsController.getLogs = () => {

}

module.exports = LogsController;