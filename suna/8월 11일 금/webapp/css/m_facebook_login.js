function checkLoginState() {
  FB.getLoginStatus(function(response) {
    console.log("하하하하")
    console.log(response)
  });
}



 window.fbAsyncInit = function() {
                  FB.init({
                    appId      : '1932124593728840',
                    xfbml      : true,
                    version    : 'v2.9'
                  });
                  FB.AppEvents.logPageView();
                };

                (function(d, s, id){
                   var js, fjs = d.getElementsByTagName(s)[0];
                   if (d.getElementById(id)) {return;}
                   js = d.createElement(s); js.id = id;
                   js.src = "//connect.facebook.net/ko_KR/sdk.js";
                   fjs.parentNode.insertBefore(js, fjs);
                 }(document, 'script', 'facebook-jssdk'));

         function facebooklogin() {
        	  FB.login(function(response) {
        		    FB.api('/me?fields=id,name,email', function (response) {

        		      console.log(response);
        		  });

        		   }, {scope: 'public_profile,email'});
        	
			}


								
								