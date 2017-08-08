//kakaotalk

$(document).ready(Kakao.init('e13d714f44c1e6d96b3ef7d13426541b'))


//로그인 처리
function kakaoLogin() {
	Kakao.Auth.login({
		success: function(authObj) {
			console.log(authObj)
			Kakao.API.request({
				url: '/v1/user/me',
				success: function(res) {
					console.log(JSON.stringify(res));
					console.log(res.id)
					
					  $.post('/auth/login.json', {
						    'id': res.id,
						    'password': res.id
						  }, function(result) {
						    console.log('로그인result:')
						    console.log(result)
						    if (result.data == 'ok') {
						    location.href = 'member/index.html'
						   } else {
			                $.post('/web/member/add.json', {'id': res.id, 'password': res.id}, function(){console.log("okok")/*})*/
			                $.post('/auth/login.json', {
			                	'id': res.id,
							    'password': res.id
			                  }, function(result) {
			                    console.log('result가 fail일 때의로그인result:')
			                    console.log(result)
			                    if (result.data == 'ok') {
			                    location.href = 'member/index.html'
			                   } else {
			                	   alert('facebook승인을 다시 해주세요.')
			                   }
			                  }, 'json') })//add.json
						   }
						  }, 'json')  //login.json 
					
				},
				fail: function(error) {
					console.log(JSON.stringify(error));
				}
			});//Kakao.API.request
		},//success of Kakao.Auth.login
		fail: function(err) {
			alert(err);
		}
	})	//Kakao.Auth.login							
}


function kakaoRegister() {
	Kakao.Auth.login({
		success: function(authObj) {
			console.log(authObj)
			Kakao.API.request({
				url: '/v1/user/me',
				success: function(res) {
					console.log(JSON.stringify(res));
					console.log(res.id)
					
					  $.post('/auth/login.json', {
						    'id': res.id,
						    'password': res.id
						  }, function(result) {
						    console.log('로그인result:')
						    console.log(result)
						    if (result.data == 'ok') {
						    	alert('이미 가입된 회원입니다.')
						   } else {
			                $.post('/web/member/add.json', {'id': res.id, 'password': res.id}, function(){
	                			 alert('회원가입 완료.')
                                  })//add.json
						   }
						  }, 'json')  //login.json 
					
				},
				fail: function(error) {
					console.log(JSON.stringify(error));
				}
			});//Kakao.API.request
		},//success of Kakao.Auth.login
		fail: function(err) {
			alert(err);
		}
	})	//Kakao.Auth.login							
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



