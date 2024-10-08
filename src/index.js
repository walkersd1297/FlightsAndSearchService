const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverconfig.js');

function setupServer(){
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
setupServer();