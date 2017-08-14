var viewTags = $('.bit-view'),
		newTags = $('.bit-new'),
		fiNo = $('#fi-no'),
		fiTitle = $('#fi-title'),
    fiDate = $('#fi-date'),
    fiContent = $('#fi-content'),
    fiPhotopath = $('#fi-photo');

var no = 0
if (no == 0) { // 새 강사 등록
//  viewTags.css('display', 'none')
$('#add-btn').click(function() {
  $.post('add.json', {
    'titl': fiTitle.val(),
    'text': fiContent.val(),
    'bd_path' : fiPhotopath.val()
  }, function(result) {
  	console.log(result)
    //location.href = 'board.html'
  }, 'json')
})
} else { // 강사 정보 조회

newTags.css('display', 'none')

$.getJSON('detail.json', {'no': no}, function(result) {
	var data = result.data
  fiNo.text(data.no)
  fiEmail.val(data.email)
  fiName.val(data.name)
  fiTel.val(data.tel)
  fiHomepage.val(data.homepage)
  fiFacebook.val(data.facebook)
  fiTwitter.val(data.twitter)
})




//
}
