//<![CDATA[
// 사용할 앱의 JavaScript 키를 설정해 주세요.
Kakao.init('e13d714f44c1e6d96b3ef7d13426541b');
function loginWithKakao() {
// 로그인 창을 띄웁니다.
Kakao.Auth.login({
success: function(authObj) {
  alert(JSON.stringify(authObj)) {
    kakao.API.request({
      url:'/v1/user/me',
      success: fucntion(res) {
        	/*alert(JSON.stringify(res)); res에 담겨있는 json값 볼 수 있음*/
	        alert(res.properties.nickname+ '님 환영합니다.');
	        location.href="./result?name="+res.properties.nickname;
	        $("#kakao-profile").append(res.properties.nickname);
					$("#kakao-profile").append($("<img/>",{"src":res.properties.profile_image,"alt":res.properties.nickname+"님의 프로필 사진"}));
      }
      
    });
}
},
fail: function(err) {
  alert(JSON.stringify(err));
}
}
)};
funtion ktout() {
  Kakao.Auth.logout(funtion () {
    setTimeout(funtion() {
      location.href="localhost:8080/fanduck/main.html"
    }, 10000)
  });
}


}
//]]>
