A One Page Website Demo
-----------------------
This is a one page RWD website to show case how easily you can create & manage a website using [coServ](https://github.com/coimotion/coServ).
The web desgin was kept to minimum so you can easily modify it to suit your needs.

## Install & Run
You can install the website using npm:

    npm install cows-onepage
    
Once the package is installed, you can change to the install directory and type:

    node startWeb
    
That will start the website. You can point your browser to http://127.0.0.1:8080 to see the results.

## Deploy To Heroku
The demo website is ready for Heroku deployment right out of the box. There are only two minor changes you have to make.
First of all, change the port setting in the [startWeb.js](https://github.com/benlue/cows-onePage/blob/master/startWeb.js) file (line #9) to "process.env.PORT" (see the sample code below).

    var  serverConfig = {
            "apiEngine": {
                "host": "coimapi.tw",
                "port": 80,
                "method": "POST"
            },
            "server": {
                "wwwPath": __dirname,
                "port": process.env.PORT,
                "maxSockets": 200
            }
         },
         coServ = require('coserv');

    coServ.init(serverConfig);
    coServ.restart();

You'll also need to assign the domain name of your Heroku machine to the demo website. Replace "127.0.0.1" with your Heroku domain in the [sites.json](https://github.com/benlue/cows-onePage/blob/master/sites.json) file.

Now you can push the whole website to Heroku using 'git push heroku master' and that's it. Your website is now available to the world.

## Documentation
A simple [article](https://github.com/benlue/cows-onePage/blob/master/onePage/doc/howTo.md) has been included to show you how to modify this demo website to become your own.