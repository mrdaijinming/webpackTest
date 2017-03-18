//var a = require('./a');
var oApp = document.getElementById("app");

import modB from './b'

require('./style.css');

oApp.innerHTML = 'webpack' + modB.a+modB.b;
