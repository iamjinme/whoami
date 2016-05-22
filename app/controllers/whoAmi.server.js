'use strict';

function Whoami() {
  
  this.getLanguage = function(req) {
    return req.headers['accept-language'].split(',')[0];
  }

  this.getBrowser = function(req) {
    var match = req.headers['user-agent'].match(/\((.*?)\)/g);
    return match[0].replace('(', '').replace(')', '');
  }
  
  this.getIp = function(req) {
    var ip = req.connection.remoteAddress;
    if (req.headers['x-forwarded-for']) {
      ip = req.headers['x-forwarded-for'];
    }
    return ip;
  }
  
  this.getWhoami = function(req) {
    return JSON.stringify({ "ipaddress": this.getIp(req), "language": this.getLanguage(req), "software": this.getBrowser(req) });
  }

};

module.exports = Whoami;
