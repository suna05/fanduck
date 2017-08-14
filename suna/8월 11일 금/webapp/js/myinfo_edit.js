var fiMno = $('#fi-mno'),
	fiInfoBtn = $('#myInfo-btn'),
    myinfoBox = $('#fileupload-myinfo'),
    templateFn = Handlebars.compile($('#fileupload-myinfo-template').text())


var mno;
//try {
//  mno = location.href.split('?')[1].split('=')[1]
//} catch (err) {}


function updateMember(pageNo) {
$.getJSON('../member/detail.json', {'mno': mno}, function(result) {	
	console.log('updateMember()가 detail.json으로 받아온 정보 중에 세션으로 받은 mno : ' + mno)
    var generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
    myinfoBox.text('') //tbody의 기존 tr 태그들을 지우고
    myinfoBox.html(generatedHTML) // 새 tr 태그들로 설정한다.
	
  }) // getJSON()
} // displayList()



$('#img-upload').fileupload({
  url: '/web/member/upload1.json',        // 서버에 요청할 URL
  dataType: 'json',         // 서버가 보낸 응답이 JSON임을 지정하기
  sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
  singleFileUploads: false, // 한 요청에 여러 개의 파일을 전송시키기.
  autoUpload: false,        // 파일을 추가할 때 자동 업로딩 하지 않도록 설정.
  disableImageResize: /Android(?!.*Chrome)|Opera/
        .test(window.navigator && navigator.userAgent), // 안드로이드와 오페라 브라우저는 크기 조정 비활성 시키기
  previewMaxWidth: 200,   // 미리보기 이미지 너비
  previewMaxHeight: 200,  // 미리보기 이미지 높이 
  processalways: function(e, data) {
	  $('#myimg-add').text('사진 변경')
      console.log('fileuploadprocessalways()...');
      console.log(data.files);
      
      var imagesDiv = $('#images-div2');
      imagesDiv.text("");
      for (var i = 0; i < data.files.length; i++) {
        try {
          if (data.files[i].preview.toDataURL) {
            $("<img>").attr('src', data.files[i].preview.toDataURL()).attr('id', '#myimg-uploaded').css('height', 'auto').css('width', 'auto').appendTo(imagesDiv);
          }
        } catch (err) {}
      }
      
      $('#myupload-btn').unbind("click");
      $('#myupload-btn').click(function() {
          data.submit();
      });
  }, 
  submit: function (e, data) { // 서버에 전송하기 직전에 호출된다.
    data.formData = {
		nickname: $('#fi-nickname').val(),
	    password: $('#fi-password').val(),
	    selfIntro: $('#fi-intro').val(),
        mno: mno
    };
  }, 
  done: function (e, data) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
    console.log('done()...');
    console.log(data.result);
    var file = data.result.fileList[0];
    $('<p/>').text("nickname : " + data.result.nickname).appendTo(document.body);
    $('<p/>').text("password : " + data.result.password).appendTo(document.body);
    $('<p/>').text("intro : " + data.result.intro).appendTo(document.body);
    $.each(data.result.fileList, function(index, file) {
      $('<p/>').text(file.filename + " : " + file.filesize).appendTo(document.body);
    });
    location.href = "mypage.html"
  }
});
	
//}//if(no==0)

$('#myupload-btn').click(function() {
	  $.getJSON('/web/member/upload1.json', 
		{ 
		  nickname: $('#fi-nickname').val(),
	      password: $('#fi-password').val(),
	      selfIntro: $('#fi-intro').val(),
	      path: $('#preview-img').attr('src'),
	      mno: mno
	    }, function(){
	    	swal({ 
	    		  title: '성공적으로 변경했습니다!',
	    		  type: "success",
	    		  closeOnConfirm: false,
	    		  confirmButtonText: '확인'
	    		 },
		      function(){
				 swal({
				  title: "이동 중..",
				  timer: 2000,
				  showConfirmButton: false
				 }, function() {
				    window.location.href = '/web/movieperson/mypage.html';
				 });
				
			   }); // swal()
	    }) // upload1.json 
})






