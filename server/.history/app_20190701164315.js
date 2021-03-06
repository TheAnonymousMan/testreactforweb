
const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const uri = 'mongodb://localhost:27017/TestProject';

const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
