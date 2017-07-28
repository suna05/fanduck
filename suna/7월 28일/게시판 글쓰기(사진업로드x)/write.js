var viewTags = $('.bit-view'),
		newTags = $('.bit-new'),
		fiNo = $('#fi-no'),
		fiBdNo = $('#fi-bdNo'),
		fiTitle = $('#fi-title'),
    fiDate = $('#fi-date'),
    fiContent = $('#fi-content'),
//    fiFilenames = $('#fi-filenames');
    fiRegister = $('#fi-rdt'),
    fiPhoto = $('#fi-photo');

var no = 0
if (no == 0) { // 새 강사 등록
//  viewTags.css('display', 'none')
$('#add-btn').click(function() {
  $.post('add.json', {
    'bdNo' : fiBdNo.val(),
//    'mNo' : "1",
    'mpNo' : "9",
  	'bdTitle': fiTitle.val(),
    'bdContent': fiContent.val(),
    'bdRegister':"2017-07-28",
    'bdPhoto' : fiPhoto.val()
  }, function(result) {
  	console.log(result)
    //location.href = 'board.html'
  }, 'json')
})
} else { // 강사 정보 조회

newTags.css('display', 'none')

/*$.getJSON('detail.json', {'no': no}, function(result) {
	var data = result.data
  fiNo.text(data.no)
  fiEmail.val(data.email)
  fiName.val(data.name)
  fiTel.val(data.tel)
  fiHomepage.val(data.homepage)
  fiFacebook.val(data.facebook)
  fiTwitter.val(data.twitter)
})*/

//else
}
/*
$('#fi-photoupload').fileupload({
  url: 'upload.json',
  dataType: 'json',
  sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
  singleFileUploads: false, // 한 요청에 여러 개의 파일을 전송시키기.  
  done: function (e, data) { 
    console.log('done()...');
    console.log(data.result); // 서버가 보낸 JSON 객체는 data.result 에 보관되어 있다.
    var filenames = data.result.data;
    
    for (var i = 0; i < filenames.length; i++) {
      var val = fiFilenames.val();
      if (val.length > 0) val += ",";
      fiFilenames.val(val + filenames[i]);
    }
  }*/
//});
