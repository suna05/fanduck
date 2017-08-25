
$(document.body).on('click', '#logout-link-board', function(event) {
	console.log("fdsklfjlsdk")
  $.getJSON('/auth/logout.json', function(result) {
    location.href = '../../main.html'
  })
})
