//--------------------------------------로그인
var fiId = $('#fi-id'),
    fiPassword = $('#fi-password'),
    fiIdAdd = $('#fi-id-add'),
    fiNicknameAdd = $('#fi-nickname-add'),
    fiPasswordAdd = $('#fi-password-add'),
    fiPasswordCheckAdd = $('#fi-password-check-add');


$('#login-btn').click(function() {
  $.post('/auth/login.json', {
    'id': fiId.val(),
    'password': fiPassword.val()
  }, function(result) {
    console.log('로그인result:')
    console.log(result)
    if (result.data == 'ok') {
    location.href = 'web/movieperson/mypage.html'
   } else {
	   alert('ID와 비밀번호가 일치하지 않습니다.')
   }
  }, 'json')
})
