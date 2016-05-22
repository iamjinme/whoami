'use strict';

function Whoami() {
  
  this.isNumeric = function(value) {
    return !isNaN(value);
  };
  
  this.isDate = function(value) {
    var date = new Date(value);
    return (date.toString() !== 'Invalid Date');
  }

  this.getBrowser = function(req) {
    var match = req.headers['user-agent'].match(/\((.*?)\)/g);
    return match[0].replace(/\(\)/g, '');
  }
  
  this.getIp = function(req) {
    var ip = req.connection.remoteAddress;
    if (req.headers['x-forwarded-for']) {
      ip = req.headers['x-forwarded-for'];
    }
    return ip;
  }
  
  this.getWhoami = function(req) {
    return JSON.stringify({ "ipaddress": this.getIp(req), "software": this.getBrowser(req) });
  }

};

module.exports = Whoami;
