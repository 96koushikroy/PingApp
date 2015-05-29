/**
 * Created by koushik_softtask on 5/29/15.
 */
var ping = require('ping');
var request = require('request');


setInterval(function () {
    var k=0;
    for (var j =0; j<9;j++){
        ping.sys.probe('google.com', function(isAlive){

            if(!isAlive)
            {

                k=k+1;

            }
            if (k==9){
        console.log('Server Error!!');
            }

        });
    }
},600000);
