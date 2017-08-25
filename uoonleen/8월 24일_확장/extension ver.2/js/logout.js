
//open-login tab
$(document).on('ready', function(){
  $('#logout-btn').on('click', function() {
    $.getJSON('http://localhost:8080/auth/logout.json', function(result) {
    })

  chrome.browserAction.setPopup({popup: "popup.html"});
    window.close();
  })


})

$(document).on('ready', function(){

  $('#enrole-btn').on('click', function() {
    chrome.windows.create({url: "local.html", type: "popup", width:300, height:450, left:1580, top:100}, function() {
    })
  })

  $('#alarm-btn').on('click', function() {
    engine()
  })
  // $('#enrole-btn').on('click', function() {
  //   chrome.windows.create({url: "local.html", type: "popup", width:300, height:450, left:1580, top:100}, function() {
  //   })
  // })
})


function engine() {
  var options = {
    type : 'basic',
    title : '영화인 개봉 알림! ',
    message : message,
    iconUrl : '../images/logo.png'
  }
  chrome.notifications.create(options, callback)
}


function callback() {
  console.log('done')
}
