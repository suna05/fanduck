
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

  // $('#enrole-btn').on('click', function() {
  //   chrome.windows.create({url: "local.html", type: "popup", width:300, height:450, left:1580, top:100}, function() {
  //   })
  // })
})
