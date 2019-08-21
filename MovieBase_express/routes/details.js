var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/:id', function(req, res, next) {
    request(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=69058331fe295fbe92db92d040420904`, function(error, response){

    var data = JSON.parse(response.body);
    res.render('details', {title: 'MovieBase', data});
  })
});

module.exports = router;
