 $.getJSON('/auth/userinfo.json', function(result) {
        if (result.data) {
      $('#login1').css('display','none')
      $('#logout1').css('display','inline-block')
          mno = result.data.mno
          detailMember(mno)
          moviePersonPrint(mno)
          movieCastInsert(mno)
    }
 })  
$(document.body).on('click', '#logout-link', function(event) {
  $.getJSON('/auth/logout.json', function(result) {
	  console.log("SNS계정 로그아웃 됨")
    location.href = '../../main.html'
  })
})