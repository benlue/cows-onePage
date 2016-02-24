A One Page Website Demo
-----------------------
This is a onw page RWD demo to show case how easily you can create & manage a website using coServ.

## Install & Run
You can install the website using npm:

    npm install cows-onePage
    
Once the package is installed, you can change to the install directory and type:

    node startWeb
    
That will start the website. You can point your browser to http://127.0.0.1:8080 to see the results.

## Deploy To Heroku
Deploying the website to Heroku is a piece of cake. First of all, change the port setting in the startWeb.js file (line #9) to "process.env.Port" (see the sample code below).

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

You'll also need to the domain name of your Heroku machine to the demo website. Replace "127.0.0.1" with your Heroku domain in the sites.json file.
Now you can push the whole website to Heroku using 'git push heroku master' and that's it. You should be able to run your website which is served by Heroku.

## What's Next
All website files are under the 'onePage' directory. Look for 'onePage/themes/onePage/layout/default/page.html' and 'onePage/themes/onePage/blocks/views/home/home.html' as the starting point.
If you're not quite familiar with coServ, you can check the [user guide](https://www.gitbook.com/book/benlue/coserv-user-guide/details) to learn about this amazing framework.