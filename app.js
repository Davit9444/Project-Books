const express = require('express');
const MainRouter = require('./routes/main-router');
const appErrorHandler = require('./errors/appErrorHandler');

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/', MainRouter)

app.use(appErrorHandler);


app.listen(process.env.PORT || 3000);