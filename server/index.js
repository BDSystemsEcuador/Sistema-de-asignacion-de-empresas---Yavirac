const express = require('express');
const morgan = require ('morgan');
const app = express();
const { mongoose } = require('./database');
const cors = require('cors');
//configuariones
app.set('port', process.env.PORT || 3000);
//Middlewares funciones para procesar datos 
app.use(morgan('dev'));//llegan las peticiones
app.use(express.json());//entiende los datos del servidor
app.use(cors({origin:'http://localhost:4200'}));

//rutas
app.use('/api/estudiantes',require('./routes/estudiantes.routes'));
app.use('/api/empresas',require('./routes/empresas.routes'));
//Iniciando servidor

app.listen(app.get('port'),()=> {
    console.log('server in port '+ app.get('port'))
});