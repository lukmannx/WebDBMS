/**
 * Header HTTP
 * 
 * belajar menerima otentikasi
 */

const http = require('http');

const server = http.createServer((req, res) => {

    let dataHeader, //fungsinya untuk menampung object header request
    dataAutorization, //berisi properti dari object header
    userPass, //hasil decode base64 to string dari data user
    splitData, //pemisah atau pembatas antara value autorization
    dataUser, //kode dengan base 64 to str
    dataResponse;

    res.setHeader('Content-Type', 'application/json');

    //ini untuk mendapatkan hasil respon berupa json
    dataHeader = req.headers;

    console.log(dataHeader);

    //get data otorisasi
    dataAutorization = dataHeader.authorization;

    //jika autorizationnya tidak terkirim maka akan manghasilkan :
    if (!dataAutorization) {
        dataResponse = {
            data: 'Undifinded Autorization'
        };

        //send ke client dan return agar berhenti
        return res.end(JSON.stringify(dataResponse));
    }

    splitData = dataAutorization.split(' ');

    dataUser = splitData[1];

    userPass = Buffer.from(dataUser, 'base64').toString();

    //create respon berisi nilai dan user pass
    dataResponse = {
        token: dataHeader.authorization,
        userPass,
    };

    return res.end(JSON.stringify(dataResponse));

});

server.listen(5000)