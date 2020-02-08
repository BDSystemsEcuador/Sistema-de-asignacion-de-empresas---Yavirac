//modulo mongoose sirve para conectarse a la bd
const mongoose = require('mongoose');
/* .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    }) ESTO ARREGLA EL ERROR */
const URI = 'mongodb://localhost/mean-crud';
mongoose.connect(URI,
    {useUnifiedTopology: true,
    useNewUrlParser: true}
    )
    .then(db => console.log('DB is connected'))
    .catch(err => {console.log(err)});
module.exports = mongoose;