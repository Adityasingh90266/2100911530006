const express = require('express');

const testRouter = express.Router();

const {prime,fibonacci,even,random} = require('../controller/testController');

testRouter
.route('/even')
.get(even)

testRouter
.route('/prime')
.get(prime)

testRouter
.route('/rand')
.get(random)

testRouter
.route('/fibo')
.get(fibonacci)

module.exports = testRouter