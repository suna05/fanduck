var fiMno = $('#fi-mno'),
	fiNickname = $('#fi-nickname'),
	fiPassword = $('#fi-password'),
	fiFileUpload = $('#fileupload'),
	fiIntro = $('#fi-intro');
  
var viewTags = $('.bit-view'),
    myinfoBox = $('#fileupload-myinfo');


var mno = 1
try {
  mno = location.href.split('?')[1].split('=')[1]
} catch (err) {}

function displayList(pageNo) {
$.getJSON('../member/detail.json', {'mno': mno}, function(result) {	
console.log(result)  
	var data = result.data
	var templateFn = Handlebars.compile($('#fileupload-myinfo-template').text())
    var generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
    myinfoBox.text('') //tbody의 기존 tr 태그들을 지우고
    myinfoBox.html(generatedHTML) // 새 tr 태그들로 설정한다.
	
  }) // getJSON()
} // displayList()

displayList(1)

//if (no == 0) {


	

$('#fileupload').fileupload({
  url: '/web/member/upload1.json',        // 서버에 요청할 URL
  dataType: 'json',         // 서버가 보낸 응답이 JSON임을 지정하기
  sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
  singleFileUploads: false, // 한 요청에 여러 개의 파일을 전송시키기.
  autoUpload: false,        // 파일을 추가할 때 자동 업로딩 하지 않도록 설정.
  disableImageResize: /Android(?!.*Chrome)|Opera/
        .test(window.navigator && navigator.userAgent), // 안드로이드와 오페라 브라우저는 크기 조정 비활성 시키기
  previewMaxWidth: 100,   // 미리보기 이미지 너비
  previewMaxHeight: 100,  // 미리보기 이미지 높이 
  previewCrop: true,      // 미리보기 이미지를 출력할 때 원본에서 지정된 크기로 자르기
  processalways: function(e, data) {
      console.log('fileuploadprocessalways()...');
      console.log(data.files);
      var imagesDiv = $('#images-div');
      imagesDiv.html("");
      for (var i = 0; i < data.files.length; i++) {
        try {
          if (data.files[i].preview.toDataURL) {
        	  viewTags.css('display', 'none')
            $("<img>").attr('src', data.files[i].preview.toDataURL()).css('width', '100px').appendTo(imagesDiv);
          }
        } catch (err) {}
      }
      $('#upload-btn').unbind("click");
      $('#upload-btn').click(function() {
          data.submit();
      });
  }, 
  submit: function (e, data) { // 서버에 전송하기 직전에 호출된다.
    console.log('submit()...');
    data.formData = {
        nickname: fiNickname.val(),
        password: fiPassword.val(),
        mno: 1
    };
  }, 
  done: function (e, data) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
    console.log('done()...');
    console.log(data.result);
    var file = data.result.fileList[0];
    $('<p/>').text("nickname : " + data.result.nickname).appendTo(document.body);
    $('<p/>').text("password : " + data.result.password).appendTo(document.body);
    $.each(data.result.fileList, function(index, file) {
      $('<p/>').text(file.filename + " : " + file.filesize).appendTo(document.body);
    });
  }
});
	
//}//if(no==0)

