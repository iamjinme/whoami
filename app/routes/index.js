'use strict';

var Whoami = require(process.cwd() + '/app/controllers/whoAmi.server.js');

module.exports = function (app) {
  
  var whoAmi = new Whoami();
  
  app.route('/')
      .get(function (req, res) {
          res.sendFile(process.cwd() + '/public/index.html');
      });

  app.route('/whoami')
      .get(function (req, res) {
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          res.send(whoAmi.getWhoami(req));
      });
};
