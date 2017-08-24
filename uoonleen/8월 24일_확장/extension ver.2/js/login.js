// send-login-info to server

var fiId = $('#fi-id'),
    fiPassword = $('#fi-password'),
    fiIdAdd = $('#fi-id-add');

$(document).on('ready', function(){
  $('#login-btn').on('click', loginPerson)
})

function loginPerson() {
  console.log("ak")
  $.post('http://192.168.0.13:8080/auth/login.json', {
    'id': fiId.val(),
    'password': fiPassword.val()
  }, function(result) {
    alert(result)
    if (result.data == 'ok') {
      alert(result.data)

   } else {
	   alert('ID와 비밀번호가 일치하지 않습니다.')
   }
  }, 'json')
  chrome.browserAction.setPopup({popup: "toolbar.html"});
  window.close();
  //self.close();
}

document.querySelector('#add-btn').addEventListener('click',
  function () {
    var url = "http://localhost:8080/main.html";
           chrome.tabs.create({ url: url });
    });
