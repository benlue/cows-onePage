A One Page Website Demo
-----------------------
This is a one page RWD website to show case how easily you can create & manage a website using [coServ](https://github.com/coimotion/coServ).
The web desgin was kept to minimum so you can easily modify it to suit your needs.

## Install & Run
You can install the website using npm:

    npm install cows-onePage
    
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

## What's Next
All website files are under the 'onePage' directory. Look for 'onePage/themes/onePage/layout/default/page.html' and 'onePage/themes/onePage/blocks/views/home/home.html' as the starting point.
If you're not quite familiar with coServ, you can check the [coServ user guide](https://www.gitbook.com/book/benlue/coserv-user-guide/details) to learn about this amazing framework.