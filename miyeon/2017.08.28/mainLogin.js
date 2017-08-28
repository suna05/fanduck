
console.log("호룿")


//아이디 기억하기

$(document).ready(function(){
    // 저장된 쿠키값을 가져와서 ID 칸에 넣어준다. 없으면 공백으로 들어감.
    console.log("dkdkd")
	var userInputId = getCookie("userInputId");
    $("input[name='idcookie']").val(userInputId); 
     
    if($("input[name='idcookie']").val() != ""){ // 그 전에 ID를 저장해서 처음 페이지 로딩 시, 입력 칸에 저장된 ID가 표시된 상태라면,
        $("#idSaveCheck").attr("checked", true); // ID 저장하기를 체크 상태로 두기.
    }
     
    $("#idSaveCheck").change(function(){ // 체크박스에 변화가 있다면,
        if($("#idSaveCheck").is(":checked")){ // ID 저장하기 체크했을 때,
            var userInputId = $("input[name='idcookie']").val();
            setCookie("userInputId", userInputId, 7); // 7일 동안 쿠키 보관
        }else{ // ID 저장하기 체크 해제 시,
            deleteCookie("userInputId");
        }
    });
     
    // ID 저장하기를 체크한 상태에서 ID를 입력하는 경우, 이럴 때도 쿠키 저장.
    $("input[name='idcookie']").keyup(function(){ // ID 입력 칸에 ID를 입력할 때,
        if($("#idSaveCheck").is(":checked")){ // ID 저장하기를 체크한 상태라면,
            var userInputId = $("input[name='idcookie']").val();
            setCookie("userInputId", userInputId, 7); // 7일 동안 쿠키 보관
        }
    });
});
 
function setCookie(cookieName, value, exdays){
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toGMTString());
    document.cookie = cookieName + "=" + cookieValue;
}
 
function deleteCookie(cookieName){
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
}
 
function getCookie(cookieName) {
    cookieName = cookieName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cookieName);
    var cookieValue = '';
    if(start != -1){
        start += cookieName.length;
        var end = cookieData.indexOf(';', start);
        if(end == -1)end = cookieData.length;
        cookieValue = cookieData.substring(start, end);
    }
    return unescape(cookieValue);
}

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
    if (result.data == 'ok') {
    location.href = 'web/movieperson/mypage.html'
   } else {
	   swal({
		   title: "회원정보 불일치",
		   text: "아이디와 비밀번호를 다시 확인해주세요",
		   html: true,
		   type: "warning",
		   customClass: 'swal-wide'
		 });
   }
  }, 'json') 
})
 
//------------------------------------회원가입

// 아이디 중복 체크

$('#fi-id-check-add').click(function() {
  //alert("아이디는 한글 2~5자, 영문 및 숫자 4~10자만 가능합니다.")
  $.post('/web/member/idCheck.json', {
    'id': fiIdAdd.val()
  }, function(result) {
    console.log(result)
    console.log("aa")
     if (result.data == 'ok') {
    	 swal({
    		   title: "쏘리",
    		   text: "이미 존재합니다.",
    		   html: true,
    		   type: "warning",
    		   customClass: 'swal-wide'
    		 });

    $('#fi-id-add').val("");
   } else {
  	 swal({
		   title: "오케이.",
		   text: "사용가능합니다.",
		   html: true,
		   type: "success",
		   customClass: 'swal-wide'
		 });
   }
  }, 'json')
})
  

//비밀번호 중복 체크, form fill up 체크, 서버에 insert
//비밀번호 중복 체크
$('#confirmMessage').html('&nbsp')
function checkPass() {
if(fiPasswordAdd.val() != fiPasswordCheckAdd.val()) {   
	//fiPasswordCheckAdd.css('background-color', '#ff6666')
	$('#confirmMessage').css('color','red').html('동일한 암호를 입력하세요.')
	//$('#confirmMessageImg2').css('display','inline-block')
    //  fiPasswordAdd.val("");
  } else if(fiPasswordAdd.val() == fiPasswordCheckAdd.val()){
	//fiPasswordCheckAdd.css('background-color', '#66cc66')
	$('#confirmMessage').html('&nbsp')
		//$('#confirmMessageImg').css('display','inline-block')
  }
}


$('#add-btn').click(function() {
	console.log("add-btn xlixks")
	fillUp();
	})

	

//회원가입 - form fill up 체크

function fillUp() {
if(fiIdAdd.val()==false){
	 swal({
		   title: "헛",
		   text: "아이디를 입력하세요.",
		   html: true,
		   type: "warning",
		   customClass: 'swal-wide'
		 });
      return;
}if(fiNicknameAdd.val()==false){
	 swal({
		   title: "헛",
		   text: "닉네임을 입력하세요.",
		   html: true,
		   type: "warning",
		   customClass: 'swal-wide'
		 });
      return;
}if(fiPasswordAdd.val()==false){
	 swal({
		   title: "헛",
		   text: "비밀번호를 입력하세요",
		   html: true,
		   type: "warning",
		   customClass: 'swal-wide'
		 });
      return;
}if(fiPasswordCheckAdd.val()==false) {
	 swal({
		   title: "헛",
		   text: "비밀번호 확인란을 확인하세요",
		   html: true,
		   type: "warning",
		   customClass: 'swal-wide'
		 });
      return;  
//회원가입 - 비밀번호 중복 체크
}/*if (fiPasswordAdd.val() !== fiPasswordCheckAdd.val()) {     
    alert("입력하신 비밀번호가 다릅니다.") 
    //  fiPasswordAdd.val("");
      fiPasswordCheckAdd.val(""); 
    return;
  }
*/
//회원가입 - 서버에 insert
$.post('/web/member/add.json', {
   'id': fiIdAdd.val(),
   'nickname': fiNicknameAdd.val(),
   'password': fiPasswordAdd.val()
 }, function(result) {
	 if (result.data == 'ok') {
		
		  swal({
			    title: "가입완료!",
			    text: "어서오세요.",
			    timer: 1700,
			    showConfirmButton: false
			  } );
		 setTimeout(function() { location.href = "main.html" }, 1900);
		 
	 } else {
	  	 swal({
			   title: "가입실패",
			   text: "한번더?",
			   html: true,
			   type: "warning",
			   customClass: 'swal-wide'
			 });
	 
	 }
 }, 'json') 
 
  }

//아이디 기억하기