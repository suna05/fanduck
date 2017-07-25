<%@page import="twitter4j.auth.AccessToken"%>
<%@page import="twitter4j.auth.RequestToken"%>
<%@page import="twitter4j.TwitterFactory"%>
<%@page import="twitter4j.Twitter"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"
     xmlns:og="http://ogp.me/ns#"
     xmlns:fb="https://www.facebook.com/2008/fbml">
<title>되라 페북아</title>
<head>
 <script type="text/javascript" src="/js/jquery-1.10.1.js" charset="utf-8"></script>
 <script  type="text/javascript">

 function fbLogin(){
  var PERMISSIONS = "user_about_me,publish_actions,publish_stream,read_stream,status_update,user_photos,photo_upload,read_friendlists,email,user_likes,offline_access";
 FB.login(function(response) {
  console.log(response);
  if (response.authResponse) {
   accessToken = response.authResponse.accessToken,
   userId = response.authResponse.userID;
  } else {
   alert('\'확인\'을 눌러 액세스 수락을 하셔야 이벤트 참여가 가능합니다.');
  }
 }, {
  scope: PERMISSIONS,
  display: 'popup'
 });
}

  function twitterGo(){
 document.frm.action="/server/twitterGo.do";
 document.frm.submit();
}



   function feedWrite() {
  var message = $("#message").val();
 FB.getLoginStatus(function(response) {
  //alert(response.status);
  if (response.status === 'connected') {
   FB.api("/me/feed", "post", {
    message: message
    //name : "라이브리 플러그인 : 1396842959",
    //description : "LiveRe allows your site visitors to comment on, share, and interact with your content in new and exciting ways.1396842959",
    //link : "http://code-lab.kr",
    //picture : "https://fbexternal-a.akamaihd.net/safe_image.php?d=AQBWbyHLtGoRz9jk&w=90&h=90&url=http%3A%2F%2F101.livere.co.kr%2Fconsumers%2Fcizion%2FfbIMG_90x90.gif&cfs=1",
    //caption : "caption2",
    //place: "155021662189", //510456002315971 남산타워
    //tags: "100007941245279"
   }, function(response){
    console.log(response);
    if(!response || response.error){
     console.log(response.error);
    }else{
     alert("페북에 글 냉겼어여~~가서 확인해봐여~~~!!!!");
    }
   });
  } else if (response.status === 'not_authorized') {
   alert( "글쓰기 권한이 없어 업로드 할 수 없습니다." );
  } else {
   alert( "글쓰기 권한이 없어 업로드 할 수 없습니다." );
  }
 });
}
   </script>

</head>
<!-- <body>
<form action="" method="post" name="frm" id="frm">
<div id="fb-root"></div>
<script type="text/javascript">
 window.fbAsyncInit = function() {

  FB.init({
   appId  : '237026416502071',
         status: true,
         cookie: false,
      xfbml: true,
   oauth : true,
   //secret : '4f15e091aa35d78898f747ecfd4d7a83'
   //channelUrl : '//code-lab.kr/channel.html'
  });

  FB.Canvas.setAutoGrow();
  FB.Canvas.scrollTo(0,0);
 };
 // Load the SDK asynchronously
 (function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ko_KR/all.js";
  fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
</script>

  <textarea id="message" name="message" cols="50" rows="20"></textarea>
  <a href="javascript:fbLogin();">페이스북로그인</a>
<a href="javascript:fbLogin();">페이스북로그인</a>
<a href="javascript:feedWrite();">페이스북보내기</a>
<a href="javascript:twitterGo();">트위터보내기</a>
</form>
</body> -->
<body>
<%
String ConsumerKey = ""; //여기 각 값들을 입력해줘야 함
String ConsumerSecret = "";
//String AccessToken = "";
//String AccessSecret = "";

Twitter twitter;
twitter = new TwitterFactory().getInstance();
twitter.setOAuthConsumer(ConsumerKey, ConsumerSecret);
RequestToken rt = twitter.getOAuthRequestToken();
String authUrl = rt.getAuthorizationURL();

//RequestToken requestToken = null;
//requestToken = twitter.getOAuthRequestToken();
// step2.jsp 에서 Secret 값을 비교하기 위해서 session 만들겠습니다.
request.getSession().setAttribute("Token",rt.getToken());
request.getSession().setAttribute("Secret",rt.getTokenSecret());
// getAuthorizationURL 메소드를 호출하면 트위터 이동 페이지가 호출됩니다.
//requestToken.getAuthorizationURL();





%>
<script type="text/javascript">
location.href='<%=authUrl%>';
</script>
</body>
</html>
