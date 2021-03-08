var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route

router.get('/', function(req, res) {
  let options = {
    root: __dirname
  }
  res.sendFile("cuteEdward.html", options)
});

// define the about route
router.get('/about', function(req, res) {
  res.send('<h1> Thank you :)<h1>'+
  '\n <img src="https://scontent.ftpe11-2.fna.fbcdn.net/v/t31.0-8/478303_279353892151464_1837136396_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=de6eea&_nc_ohc=5-OhrpjMl0oAX9dKiq4&_nc_ht=scontent.ftpe11-2.fna&oh=1992072addca26b028eb2858afc42cd7&oe=606D4D83" height="80%"/>'
  );
});

module.exports = router;
