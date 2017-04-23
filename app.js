var express = require('express');
var request = require('request-promise-native');
var app = express();

app.get('/api/stories', function (req, res) {
  // This will start out by getting the front page, then fill in with most recent stories until you reach 50
  const hnAPI = 'http://hn.algolia.com/api/v1/search_by_date?tags=story';
  const fpAPI = 'http://hn.algolia.com/api/v1/search?tags=front_page';
  let pageNum = 1;
  let apiArray = [];
  let options = {
      uri: fpAPI,
      json: true
  }
  function getAnotherSet(num) {
    request({uri: hnAPI + '&page=' + num, json: true}).then((secResponse) => {
      apiArray = [...apiArray, ...secResponse.hits]

      if (apiArray.length < 50) {
        num++;
      //  console.log(num);
        getAnotherSet(num);
      } else {
        res.send({data: apiArray})
      }
    })
  }

  request(options)
    .then((apiResponse) => {
      apiArray = apiResponse.hits;
    //  console.log(' get more hits', apiArray.length);
      if (apiResponse.hits.length < 50) {
        getAnotherSet(pageNum);
      } else {
        res.send({data: apiArray});
      }
    })
});

app.get('/api/comments/:storyId', function(req, res) {
  const itemURL = 'http://hn.algolia.com/api/v1/items/'
  let options = {
      uri:  itemURL + req.params.storyId,
      json: true
  }
  request(options)
    .then((apiResponse) => {
      res.status(200).send({data: apiResponse});
    });
//  res.status(200).send(req.params);
});

app.get('/api/user/:userId', function(req, res) {
  const itemURL = 'http://hn.algolia.com/api/v1/search?tags=story,author_'
  let options = {
      uri:  itemURL + req.params.userId,
      json: true
  }
  request(options)
    .then((apiResponse) => {
      res.status(200).send({data: apiResponse});
    });

});

app.get('/api/stories/:userId', function(req, res) {
  res.status(200).send(req.params);
});


// * Get the first 50 __stories__ from hacker news.
// * For each story. Get all their __comments__.
// * For each story. Get their __user__.
// * For each user. Get their top 5 __submitted stories based on karma__.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
