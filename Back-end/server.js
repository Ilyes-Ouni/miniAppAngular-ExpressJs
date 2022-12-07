const express = require('express')
const app = express();
const bodyParser = require('body-parser'); // middleware
require("dotenv").config();
const PORT = 3000;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
var cors = require('cors')
app.use(cors());

app.use("/images", express.static("uploads"));

const login = require('./router/login.router')
app.use('/', login)

const users = require('./router/users.router')
app.use('/', users)

const clients = require('./router/client.router')
app.use('/', clients)

const regions = require('./router/region.router')
app.use('/', regions)


app.listen(3000)