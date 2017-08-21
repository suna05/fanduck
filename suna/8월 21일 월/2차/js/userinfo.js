 $.getJSON('/auth/userinfo.json', function(result) {
        if (result.data) {
          mno = result.data.mno
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