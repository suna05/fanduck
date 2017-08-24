 $.getJSON('/auth/userinfo.json', function(result) {
        if (result.data) {
      	  $('#login1').css('display','none')
          $('#logout-link').css('display','inline-block')
        }
     })
$(document.body).on('click', '#logout-link', function(event) {
  $.getJSON('/auth/logout.json', function(result) {
    location.href = '../main.html'
  })
})