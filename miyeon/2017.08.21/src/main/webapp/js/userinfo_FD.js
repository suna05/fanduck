var mno = 0
  $.getJSON('/auth/userinfo.json', function(result) {
    if (result.data) {
      mno = result.data.mno
      console.log(mno +'번 회원 <-/auth/userinfo.json통해 받아온 세션번호 at index.html')
      detailMember(mno)
      moviePersonPrint(mno)
      movieCastInsert(mno)
    }
 })  
$(document.body).on('click', '#logout1', function(event) {
  $.getJSON('/auth/logout.json', function(result) {
	  console.log("FD계정 로그아웃 됨")
    location.href = '../../main.html'
  })
})