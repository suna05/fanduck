
//open-login tab
$(document).on('ready', function(){
  $('#logout-btn').on('click', function() {
    console.log("logoutperson")
    $.getJSON('http://localhost:8080/auth/logout.json', function(result) {
    console.log("로그아웃되었어어어엏ㅎㅎ")
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
})
