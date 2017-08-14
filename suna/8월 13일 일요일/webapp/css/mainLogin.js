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
    location.href = 'member/index.html'
   } else {
	   alert('ID와 비밀번호가 일치하지 않습니다.')
   }
  }, 'json') 
})
 
//------------------------------------회원가입

// 아이디 중복 체크

$('#fi-id-check-add').click(function() {
  //alert("아이디는 한글 2~5자, 영문 및 숫자 4~10자만 가능합니다.")
	 console.log('bbbbb')
  $.post('/web/member/idCheck.json', {
    'id': fiIdAdd.val()
  }, function(result) {
    console.log('aaaaa')
     if (result.data == 'ok') {
     alert("사용할 수 없는 아이디 입니다.")
    $('#fi-id-add').val("");
   } else {
     alert("사용할 수 있는 아이디 입니다.") 
   }
  }, 'json')
})
  
//비밀번호 중복 체크, form fill up 체크, 서버에 insert
$('#add-btn').click(function() {
	fillUp();
	})


//회원가입 - form fill up 체크

function fillUp() {
if(fiIdAdd.val()==false){
      alert("아이디를 입력하세요");
      return;
}if(fiNicknameAdd.val()==false){
      alert("닉네임를 입력하세요");
      return;
}if(fiPasswordAdd.val()==false){
      alert("비밀번호를 입력하세요");
      return;
}if(fiPasswordCheckAdd.val()==false) {
     alert("비밀번호를 다시 입력하세요");
      return;  
//회원가입 - 비밀번호 중복 체크
}if (fiPasswordAdd.val() !== fiPasswordCheckAdd.val()) {     
    alert("입력하신 비밀번호가 다릅니다.") 
    //  fiPasswordAdd.val("");
      fiPasswordCheckAdd.val(""); 
    return;
  }

//회원가입 - 서버에 insert
$.post('/web/member/add.json', {
   'id': fiIdAdd.val(),
   'nickname': fiNicknameAdd.val(),
   'password': fiPasswordAdd.val()
 }, function(result) {
	 if (result.data == 'ok') {
		 alert("가입되었습니다.방가방가")
	 } else {
		 alert("가입 안되었네요. ㅋㅋㅋㅋ")
	 }
 }, 'json') 
 location.href = "main.html"
  }

//아이디 기억하기