const express = require('express');
const router  = express.Router();

const fs      = require('fs');
const path    = require('path');

const cors    = require('cors');

const AUI_Injector = require('./aui_injector.js').AUI_Injector;

const app     = express();

require('dotenv').config();

//extension for expressjs needed for the project
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cors());




/**
 * Return homepage
 * @name GET /login
 * @function
 */
app.get('/', (req, res) => {
//  res.sendFile('index.html', { root: __dirname }); //root = start on actual folder
    
    //console.log("app.get", "req:", req);
    //console.log("app.get", "res:", res);

    // res.sendFile('a-user-interface-main/3DRoom+ic.html', { root: __dirname }); //root = start on actual folder

    fs.readFile(__dirname + "/a-user-interface-main/3DRoom+ic.html", 'utf8', function (error, html) {
        if (error) {
            throw error;
        }
        
        console.log("app.get", "html:", html);

        const filepath__infinishute = "saves/home.shu";
        const html__new = AUI_Injector.injectLoadInfinishute(html, filepath__infinishute);

        res.end(html__new);
    });

});

const auiPath = path.join(__dirname, 'a-user-interface-main');
app.use(express.static(auiPath));

const fontsPath = path.join(__dirname, 'a-user-interface-main/fonts');
app.use(express.static(fontsPath));

const savesPath = path.join(__dirname, 'a-user-interface-main/saves');
app.use(express.static(savesPath));


/**
 * Return the form page
 * @name GET /form
 * @function
 */
app.get('/form', (req, res) => {
 res.sendFile('public/templates/form.html', { root: __dirname });
});


/**
 * Start the server at port 3000
 * @function
 */
app.listen(3000, ()=>{console.log('server started')});