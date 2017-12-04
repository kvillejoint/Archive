MVC folder design
used for burger app - node, express, mysql, handlebars, homemade orm

FOLDER STRUCTURE AND PURPOSE
Config -        holds connection to database + orm. This is in charge of all connections to mysql
    connection.js - all mysql connection data. Export this to orm.js
    orm.js - connection.js connections are imported here. Here we create object with all our methods of what we will do with data
        - CRUD
Controllers -   all routes to get, post, and pull info

Database - schema and seeds for mysql

Models - uses orm within config to collect data from database and send to controllers folder
    orm method sends callback result here
    burger.js - requires orm.js to modify orm for use in burgers database
Public - contains all public assets (images, css)
Views - all .handlebars files to send to front-end

Server.js - creates express connection and runs node Server
