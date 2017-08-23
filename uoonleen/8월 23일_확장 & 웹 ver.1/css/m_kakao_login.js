//kakaotalk

$(document).ready(Kakao.init('e13d714f44c1e6d96b3ef7d13426541b'))


//로그인 처리
function kakaoLogin() {
	Kakao.Auth.login({
		success: function(authObj) {/* 
    location.href='../web/main.html'; */
			console.log(authObj)
			Kakao.API.request({
				url: '/v1/user/me',
				success: function(res) {
					console.log(JSON.stringify(res));
					console.log(res.id.val)
					// $.getJSON('/member/kakaoLogin.json', {'id': res.id.val()}, function(){console.log("okok"})
				},
				fail: function(error) {
					console.log(JSON.stringify(error));
				}
			});
		},
		fail: function(err) {
			alert(err);
		}
	})								
}




//로그아웃 처리
function logoutWithKakao(){
	Kakao.Auth.logout();
	alert('카카오 로그아웃 완료!');
	// setCookie("kakao_login","",-1);  // 쿠키삭제 (로그아웃)
	//deleteCookie( "kakao_login" ); 쿠키삭제 다른 방법
	createLoginKakao();
	// window.location.href="../index.html";
}



