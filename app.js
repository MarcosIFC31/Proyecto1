var express = require('express');
var app = express();

const carstypeRoute = require('./Routes/cars-routes');
app.use('/api', carstypeRoute);

app.use(express.json());
app.listen(3000,()=> console.log('Server is running on port 3000'));

