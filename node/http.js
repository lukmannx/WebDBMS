/**
 * Core modul : http
 * 
 * membuat server menggunakan modul http
 */

const http = require("http");

const server = http.createServer((req, res) => {
    
    //inisialisasi variabel yang akan digunakan
    let data;

    console.log(req);

    /**
     * object request itu banyak, tapi yang sering digunakan yaitu 3 :
     * url, method, headers.
     */

    // create object yang berisi url, method dan header

    data = {
        url : req.url,
        method : req.method,
        header : req.headers
    }

    //ini akan merubah set response menjadi berupa data json
    res.setHeader("Content-Type", "application/json")

    res.end(JSON.stringify(data))

});

server.listen(3000)