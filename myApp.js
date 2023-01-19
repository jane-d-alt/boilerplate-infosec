const express = require('express');
const app = express();
let helmet = require('helmet');
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({action: 'deny'}));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
let ninetyDaysInSeconds = 90*24*60*60;
app.use(helmet.hsts({maxAge: ninetyDaysInSeconds, force: true}));
app.use(helmet.dnsPrefetchControl());

/*the following can be implemented with a helmet configuration object
app.use(helmet.noCache());
app.use(helmet.contentSecurityPolicy({directives: {defaultSrc: ["'self'"], scriptSrc: ["'self'", 'trusted-cdn.com']}}));*/

//example:
app.use(helmet({
  noCache(),
  contentSecurityPolicy: {
    defaultSrc: ["'self'"], 
    scriptSrc: ["'self'", 'trusted-cdn.com']
  }
}));
