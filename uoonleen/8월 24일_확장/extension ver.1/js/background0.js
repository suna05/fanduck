var messages = [],
    ids = []

var latestID;

$(function() {
  engine()
  setInterval(engine, 2000)
})

function engine() {
  var newTweets = []
  $.get('https://twitter.com/i/notifications', function(data) {
    var htmlData = data

    $data = $(htmlData).find('#stream-items-id').eq(0)
    $data.find('.ActivityItem-quoteTweetContainer').remove()
    $data.find('.js-navigable-stream').remove()
    $data.find('.activity-timestamp').remove()
    $('body').append($data)
    for (var i = 0; i < $data.find('li.stream-item').length; i++) {
      ids[i] = $data.find("li.stream-item").eq(i).attr('data-item-id')
      messages[i] = ($($data).find('li.stream-item').eq(i).find('div.stream-item-activity').text()).replace(/\n/g, '').trim()
    }

    if(latestID == ids[0]) {
      // no undate
    } else if (latestID === undefined) {
      // first run browser session
      var firstRun = {
        type : 'basic',
        title : 'Twitter Notifier',
        message : 'You may like to check your twitter account for latest notifications.',
        iconUrl : '../images/logo.png',
      }
      chrome.notifications.create(firstRun)

      latestID = ids[0]
    } else if (latestID != ids[0]) {
      newTweets[0] = messages[0]
      latestID = ids[0]
    }

    console.log(latestID)
    console.log(newTweets)

    if (newTweets.length == 0) {
      // nothing
    } else {
      for (i = 0; i < newTweets.length; i++) {
        var myTweet = {
          type : 'basic',
          title : 'New notifications!',
          message : newTweets[0],
          contextMessage: "Tiwtter Notifier",
          buttons: [{
            title: "Open Link"
          }],
          iconUrl : '../images/logo.png',
        }
        chrome.notifications.onButtonClicked.addListener(function() {
          window.open('https://twitter.com/i/notifications')
        })
        chrome.notifications.create(myTweet)
      }
    }
  })
}
