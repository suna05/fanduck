
//open-login tab
$(document).on('ready', function(){
  $('#ex-logout-btn').on('click', function() {
    console.log("logoutperson")
    $.getJSON('http://localhost:8080/auth/logout.json', function(result) {
    console.log("로그아웃되었어어어엏ㅎㅎ")
    })

  chrome.browserAction.setPopup({popup: "popup.html"});
    window.close();
  })


})
