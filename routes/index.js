var express = require('express');
var router = express.Router();

/* GET api doc. */
router.get('/', function(req, res, next) {
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.render('index', {fullUrl: fullUrl});
});

/* POST word count */
router.post('/', function(req, res, next) {
  var search  = req.body.search,
      content = req.body.content,
      re      = new RegExp('\\b' + req.body.search + '\\b', 'gi');

  res.json({
    search: search,
    ocurrences: content.match(re).length
  });
});

module.exports = router;
