let express = require('express');
let router = express.Router();
let RubbishChe = require('./RubbishChe.js');
let Edward = require('./Edward.js');
let Bob = require('./Bob.js');
router.get('/', (req, res) => {
    let options = {
        root: __dirname,
        dotfiles: 'deny'
    }
    res.sendFile("index.html", options)
})
router.use('/RubbishChe', RubbishChe);
router.use('/Edward', Edward);


module.exports = router;