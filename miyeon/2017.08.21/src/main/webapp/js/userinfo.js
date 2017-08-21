 $.getJSON('/auth/userinfo.json', function(result) {
        if (result.data) {
        	  $('#login1').css('display','none')
              $('#logout1').css('display','inline-block')
          mno = result.data.mno
          console.log(mno+"sns로그인")
          detailMember(mno)
          moviePersonPrint(mno)
          movieCastInsert(mno)
        }
     })
$(document.body).on('click', '#logout-link', function(event) {
  $.getJSON('/auth/logout.json', function(result) {
    location.href = '../../main.html'
  })
})