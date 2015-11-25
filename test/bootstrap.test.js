process.env.NODE_ENV = 'test';

global.expect  = require('chai').expect;
global.request = require('supertest');
global.app     = require('../app');

var http   = require('http');
var server = http.createServer(global.app);

server.listen(3100);
