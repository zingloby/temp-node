const http = require('http')

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.end(`welcome to our home page`)
    }
    if(req.url === '/about'){
        res.end(`here is our about page with short history`)
    }
    res.end(
     `<h1>Ooops!</>
     <p>we could not found your required page</p>
     <a href="/">back to home page</a> `
    );
    
})

server.listen(5000)