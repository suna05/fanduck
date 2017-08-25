// send-login-info to server

var fiId = $('#fi-id'),
    fiPassword = $('#fi-password'),
    fiIdAdd = $('#fi-id-add');


document.getElementById('login-btn').addEventListener('click', loginPerson)


function loginPerson() {
  console.log("ak")
  $.post('http://localhost:8080/auth/login.json', {
    'id': fiId.val(),
    'password': fiPassword.val()
  }, function(result) {
    // alert(result)
    if (result.data == 'ok') {
      // alert(result.data)
      window.close();

   } else {
	   alert('ID와 비밀번호가 일치하지 않습니다.')
     chrome.browserAction.setPopup({popup: "popup.html"});
   }
  }, 'json')
  chrome.browserAction.setPopup({popup: "toolbar.html"});
  //self.close();
}



//open-login tab
document.querySelector('#add-btn').addEventListener('click',
  function () {
    var url = "http://localhost:8080/main.html";
           chrome.tabs.create({ url: url });
    });
