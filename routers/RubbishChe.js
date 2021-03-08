let express = require('express');
let router = express.Router();
router.use(express.static('./public')); // 把 public 中的檔案全部丟上來
// middleware that is specific to this router

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route

router.get('/', function(req, res) {
  res.send(
    '<a href="https://www.youtube.com/watch?v=l3ewFXzhVCk" TARGET="_BLANK"><big><big><big>謝謝你</big></big></big></a>'+'<br>'+
    '<a href="/user/RubbishChe/about"> about </a>'+'<br>'+
    '<a href="/user/RubbishChe/classA.html"> classA </a>'
    );
});

// define the about route
router.get('/about', function(req, res) {
  res.send(
    '<h1> 謝謝你們的付出 :)) </h1>'+
    '\n <img src="https://scontent.ftpe11-2.fna.fbcdn.net/v/t1.0-9/10473060_706441562766803_1261679413615128597_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=e3f864&_nc_ohc=bE_MzZzz2yoAX-7QnM0&_nc_ht=scontent.ftpe11-2.fna&oh=83db3ce80b0ef87460895f19ff632e74&oe=606DEB7E"  >'
    );
});

module.exports = router;
