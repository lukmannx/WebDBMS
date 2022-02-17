/**
 * bismillah
 */

const lukman = require('http')

const hakim = lukman.createServer ((req, res) => {
    let data;

    console.log(req);

    data = {
        url : req.url,
        method : req.method,
        header : req.headers
    }

    res.setHeader("Content-Type", "application/json")

    res.end(JSON.stringify(data))
})

hakim.listen(4501)