//grab Packages
//===========================================
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

const port = process.env.PORT || 3000;
//configure
//===================================

//Where to find site resources
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

//configure instagram
ig.use({
  access_token:'3404375326.1677ed0.5469030f83b746a08d374e2a4678f81e'
});

// alternatively we can use the client_id and client_secret
// for now we'll use the access_token way
// ig.use({
// get these from when we create our app as an instagram developer
// https://www.instagram.com/developer/
// client_id: 'MY_CLIENT_ID',
// client_secret: 'MY_CLIENT_SECRET'
// });

// home page route - popular images
app.get('/', function(req, res) {
// use the instagram package to get popular media
ig.user_self_media_recent(function(err,medias,pagination,remaining,limit){
   res.render('pages/index',{ grams: medias});
});

});
// render the home page and pass in the popular images
  //res.render('pages/index', { grams: medias });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
