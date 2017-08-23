$('#fileupload').fileupload({
  url: '/movieperson/add.json',        // 서버에 요청할 URL
  dataType: 'json',         // 서버가 보낸 응답이 JSON임을 지정하기
  sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
  singleFileUploads: true, // 한 요청에 여러 개의 파일을 전송시키기.
  autoUpload: false,        // 파일을 추가할 때 자동 업로딩 하지 않도록 설정.
  disableImageResize: /Android(?!.*Chrome)|Opera/
        .test(window.navigator && navigator.userAgent), // 안드로이드와 오페라 브라우저는 크기 조정 비활성 시키기
  previewMaxWidth: 280,   // 미리보기 이미지 너비
  previewMaxHeight: 280,  // 미리보기 이미지 높이 
  processalways: function(e, data) {
      $('#img-add').text('사진 변경')
	  console.log('fileuploadprocessalways()...');
      
      console.log(data.files);
      var imagesDiv = $('#images-div');
      imagesDiv.text("");
      for (var i = 0; i < data.files.length; i++) {
        try {
          if (data.files[i].preview.toDataURL) {
            $("<img>").attr('src', data.files[i].preview.toDataURL()).attr('id', '#img-uploaded').css('height', 'auto').css('width', 'auto').appendTo(imagesDiv);
          }
        } catch (err) {}
      }
      
      $('#upload-btn').unbind("click");
      $('#upload-btn').click(function() {
          $.post('/filmperson/add.json', {
		       'fpCode': $('#tags').val().split('(')[1].substring(0, 8),
		       'fpName': $('#tags').val().split(' ')[0]
		        }, function(result) {
		        	console.log(result)
		        	console.log('castMember 추가하는 곳인데 여기서 mno가 ' + mno)
		        }, 'json')
          data.submit();
          	swal({
          		title: "마이페이지로 이동 중입니다...",
          		timer: 2000,
          		showConfirmButton: false
          	}, function() {
          		window.location.href = '/web/movieperson/mypage.html';
          		moviePersonPrint(mno)
          	});
      });
  }, 
  submit: function (e, data) { // 서버에 전송하기 직전에 호출된다.
    console.log('submit()...');
    console.log($('.hidden-info').val())
    data.formData = {
        mno: mno,
        mpNickname: $('#tags').val().split(' ')[0],
        mpCode: $('#tags').val().split('(')[1].substring(0, 8),
   		mpContent: $('#mp-content').val(),
   		mpType: $('.hidden-info').val().split('-')[0],
   		mpFilmo: $('.hidden-info').val().split('-')[1]
    };
  }, 
  done: function (e, data) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
    console.log('done()...');
    console.log(data.result);
    
    movieCastInsert(mno)     
    var file = data.result.fileList[0];
    $('<p/>').text("name : " + data.result.mpNickname).appendTo(document.body);
    $('<p/>').text("content : " + data.result.mpContent).appendTo(document.body);
    $.each(data.result.fileList, function(index, file) {
      $('<p/>').text(file.filename + " : " + file.filesize).appendTo(document.body);
    });
  }
});
