/**
 * Routing dengan method
 */

const http = require('http')

const server = http.createServer ((req, res) => {
    let url,//
    method,//digunakan untuk menampung
    dataResponse//data yg akan dikirim

    res.setHeader("Content-Type", "application-json")

    url = req.url

    //jika method tidak ada isi, maka isi dengan method get
    method = req.method ?? "get"

    //routing
    if (url === "/") {
        dataResponse = {
            data: "Ini adalah Halaman HomePage"
        }
    }else if (url === "/login") {
        //akses untuk method post
        if (method === "POST") {
            dataResponse = {
                data: "Anda berhasil login menggunakan method POST"
            }
        }else{
            dataResponse = {
                data: "Maaf, ubah terlebih dahulu method menjadi POST"
            }
        }
    }else{
        dataResponse = {
            data: "404, Halaman tidak ditemukan"
        }
    }

    return res.end(JSON.stringify(dataResponse))

})

server.listen(1000)