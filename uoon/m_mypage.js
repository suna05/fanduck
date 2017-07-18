$('#update-page').click(function(event) {
  event.preventDefault();
  location.href = "m_update.html"
})
$('#calendar-page').click(function(event) {
  event.preventDefault();
  location.href = "m_calendar.html"
})
$('#mypage').click(function(event) {
  event.preventDefault();
  location.href = "m_mypage.html"
})

$('#mp-add').hover(function() {
  event.preventDefault();
  $('.footer-menu1').css('color', '#fa507b')
  location.href = "m_add.html"
}, function() {
  $('.footer-menu1').css('color', 'black')
})

$('#myprofile').hover(function() {
  $('.footer-menu3').css('color', '#fa507b')
}, function() {
  $('.footer-menu3').css('color', 'black')
})

$('#calendar-page').hover(function() {
  $('.glyphicon').css('color', '#fa507b')
}, function() {
  $('.glyphicon').css('color', 'black')
})
