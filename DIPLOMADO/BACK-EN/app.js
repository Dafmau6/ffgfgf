const app = require('./holamundo');
const connect =require ('./config/db');
connect();
const port = process.env.PORT || 3000;
app.listen(port,
    () => console.log(`La aplicación está
corriendo en http://localhost:${3000}`)
);
module.exports = app;
