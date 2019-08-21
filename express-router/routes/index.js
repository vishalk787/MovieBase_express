var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res, next) {
    request('https://api.themoviedb.org/3/trending/movie/week?api_key=69058331fe295fbe92db92d040420904', function(error, response){

    var data =  JSON.parse(response.body).results
    res.render('index', { title: 'MovieBase',  data } );

  }) 
});

module.exports = router;

