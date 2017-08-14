var title = $('#title'),
    content = $('.panel-body');

$(document).ready(function() {
  $('#summernote').summernote({
    height:440,
    width: 800,
    onImageUpload : function(files, editor, welEditable) {
      sendFile(files[0], editor, welEditable);
      console.log(onImageUpload)
  },
    lang: 'ko-KR'
  });  
  
});



var save = function() {
  var makrup = $('.panel-body').summernote('code');
  $('.panel-body').summernote('destroy');
  var title = $('#title').val()

  console.log(makrup)
  
  console.log(title)
  
  $.post('add.json', {
		'bdTitle': title,
		'bdContent': makrup
	}, function(result) {
		alert("글이 등록되었습니다.")
	}, 'json')
  
}






	$('#closeBtn').click(function() {
		console.log("닫힘버튼~~")
		/* $('#div1').remove("#p"); */
		/* $('#SummernoteText').code('') */
		$('#summernote').summernote('code', '')
		/*닫힘버튼 눌렀을 때 썸머노트 내에 입력한 값 초기화 */
		$('#title').val('')
		/*닫힘버튼 눌렀을 때 modal창의 title값 초기화*/
	})

	


  
