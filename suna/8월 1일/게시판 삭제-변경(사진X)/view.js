var viewTags = $('.bit-view'),
		newTags = $('.bit-new'),
//		fiNo = $('#fi-no'),
		fiBdNo = $('#fi-bdNo'),
		fiTitle = $('#fi-title'),
    fiDate = $('#fi-date'),
    fiContent = $('#fi-content'),
//    fiFilenames = $('#fi-filenames');
    fiRegister = $('#fi-rdt'),
    fiPhoto = $('#fi-photo');

var bdNo = 0

try {
  bdNo = location.href.split('?')[1].split('=')[1]
} catch (err) {}


if (bdNo == 0) { // 새 강사 등록
  viewTags.css('display', 'none')
$('#add-btn').click(function() {
  $.post('add.json', {
    'bdNo' : fiBdNo.val(),
//    'mNo' : "1",
//    'mpNo' : "9",
  	'bdTitle': fiTitle.val(),
    'bdContent': fiContent.val(),
    'bdRegister': fiDate.val(),
    'bdPhoto' : fiPhoto.val()
  }, function(result) {
  	console.log(result)
    //location.href = 'board.html'
  }, 'json')
})
} else { // 강사 정보 조회

newTags.css('display', 'none')

$.getJSON('detail.json', {'bdNo': bdNo}, function(result) {
	var data = result.data
  fiBdNo.text(data.bdNo)
  fiTitle.val(data.bdTitle)
  fiContent.val(data.bdContent)
  fiDate.val(data.bdRegister)
  fiPhoto.val(data.bdPhoto) 
})



$('#upd-btn').click(function() {
//	console.log(bdNo)
    $.post('update.json', {
      'bdNo': bdNo,
      'bdTitle': fiTitle.val(),
      'bdContent': fiContent.val(),
      'bdRegister': fiDate.val()
    }, function(result) {
      location.href = 'board.html'
    }, 'json')
  })

  $('#del-btn').click(function() {
    $.getJSON('delete.json', {'bdNo': bdNo}, function(result) {
      location.href = 'board.html'
    })
  })


}
