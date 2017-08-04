var FeedParser = require('feedparser');
var request = require('request');
var inquirer = require('inquirer');
var index = 0;
var feed = require('./feed');
var questions = require('./questions');

function getFeedInformation(objAnswers) {

  var req = request(feed);
  var feedparser = new FeedParser()

  req.on('response', function (res) {
    var stream = this;
    if (res.statusCode !== 200) {
      this.emit('error', new Error('Bad status code'));
    } else {
      stream.pipe(feedparser);
    }
  });

  feedparser.on('readable', function () {
    var stream = this;
    var item;
    while(item = stream.read()) {

      index = index + 1;
      if (index === 1) {
        var episodeUrl = item.enclosures[0].url.split('/').pop();
        var episodeID = episodeUrl.split('-').shift();
        var cover = item.image.url.split('/').pop().split('artworks-').pop().split('-original').shift();
        console.log('--------------------------------------------------------------')
        console.log(`layout: post` );
        console.log(`title: \"${item.title}\"` );
        console.log(`home-title: \"${objAnswers.hometitle}\"` );
        console.log(`type: \"${objAnswers.type[0]}\"` );
        console.log(`cast: \"${episodeUrl}\"` );
        console.log(`cast-length: \"${item.enclosures[0].length}\"` );
        console.log(`cast-time: \"${item['itunes:duration']['#']}\"` );
        console.log(`description: \"${item.description}\"` );
        console.log(`soundcloud-id: \"${episodeID}\"` );
        console.log(`soundcloud-post-image: \"${cover}\"` );
        console.log(`tags: \"${objAnswers.tags}\"` );
        console.log('--------------------------------------------------------------')
      }
    }
  });
}

inquirer.prompt(questions).then(function (answers) {
  var obj = answers;
  getFeedInformation(obj);
});
