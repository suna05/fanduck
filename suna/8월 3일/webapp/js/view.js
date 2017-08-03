var viewTags = $('.bit-view'),
		newTags = $('.bit-new'),
//		fiNo = $('#fi-no'),
		fiBdNo = $('#fi-bdNo'),
		fiTitle = $('#fi-title'),
    fiDate = $('#fi-date'),
    fiContent = $('#fi-content'),
//    fiFilenames = $('#fi-filenames');
    fiRegister = $('#fi-rdt'),
    fiFilenames = $('#fi-filenames'),
    //fiPhoto = $('#fi-photo'),
    searchValue = $('#value'),
    searchBtn = $('#btn-search');

var bdNo = 0

try {
  bdNo = location.href.split('?')[1].split('=')[1]
} catch (err) {}



if (bdNo == 0) { // 새 게시글 등록
  viewTags.css('display', 'none')
$('#add-btn').click(function() {
	console.log(fiFilenames.val())
  $.post('add.json', {
    //'bdNo' : fiBdNo.val(),
    'mpNo' : 1,
//    'mpNo' : "9",
  	'bdTitle': fiTitle.val(),
    'bdContent': fiContent.val(),
    'bdRegister': fiDate.val(),
    'filenames': fiFilenames.val()
  }, function(result) {
  
//  	$.getJSON('list.json', {
//  		'bdNo' : bdNo,
//  		'bdPhoto' : 
//  	})
    //location.href = 'board.html'
  }, 'json')
})
} else { // 게시글 정보 조회

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
//console.log(bdNo)
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


$('#fi-photoupload').fileupload({
  url: 'upload.json',
  dataType: 'json',
  sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
  singleFileUploads: false, // 한 요청에 여러 개의 파일을 전송시키기.  
  done: function (e, data) { 
    console.log('done()...');
    console.log(data.result); // 서버가 보낸 JSON 객체는 data.result 에 보관되어 있다.
    var filenames = data.result.fileList;
    
    for (var i = 0; i <filenames.length-1 ; i++) {
      var val = fiFilenames.val();
      if (val.length > 0) val += ",";
      console.log('sssss')
      fiFilenames.val(val + filenames[i]);
    }
  }
});

