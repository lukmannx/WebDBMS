/**
 * bismillah
 */

 const lukman = require('http')

 const hakim = lukman.createServer ((req, res) => {
    let url,
    dataResponse

    res.setHeader("Content-Type", "application-json")
    url = req.url

    //ROUTING
    if (url === "/") {
        dataResponse = {
            data: "Ini adalah halaman Home Page"
        }
    }else if (url === "/login") {
        dataResponse = {
            data: 'Ini adalah halaman login'
        }
    }else if (url === "/register") {
        dataResponse = {
            data: "Ini adalah halaman register"
        }
    }else if (url == '/')

    return res.end(JSON.stringify(dataResponse))

 })
 
 hakim.listen(4502)