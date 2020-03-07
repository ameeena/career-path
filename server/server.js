const configureExpress = require('./config/express-config');

const app = configureExpress();

const hostname = '127.0.0.1';
const port = '3500';


app.listen(port, hostname, () =>{
    console.log("Server Listening at port  : ", port);
});

module.exports = app;