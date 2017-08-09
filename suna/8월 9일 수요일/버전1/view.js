var viewTags = $('.bit-view'),
newTags = $('.bit-new'),
//fiNo = $('#fi-no'),
fiBdNo = $('#fi-bdNo'),
fiTitle = $('#fi-title'),
fiDate = $('#fi-date'),
fiPhoto = $('#represent-photo'),
fiPhotoName = $('#represent-filename'),
fiContent = $('#fi-content'),
//fiFilenames = $('#fi-filenames');
fiRegister = $('#fi-rdt'),
fiFilenames = $('#fi-filenames'),
//fiPhoto = $('#fi-photo'),
searchValue = $('#value'),
searchBtn = $('#btn-search'),
representPhoto = $('#representPhoto')
photo = $('#photo'),
photo1 = $('#photo1'),
photo2 = $('#photo2'),
photo3 = $('#photo3'),
tbody = $('#view-ex');

var bdNo = 0

try {
	bdNo = location.href.split('?')[1].split('=')[1]
} catch (err) {}



if (bdNo == 0) { // 새 게시글 등록
	viewTags.css('display', 'none')
	$('#add-btn').click(function() {
		/*console.log(fiFilenames.val())
		if(fiFilenames.val() == null) {
  		filenames == "default";
  	}*/
		$.post('add.json', {
			//'bdNo' : fiBdNo.val(),
			'mpNo' : 1,
//			'mpNo' : "9",
			'bdTitle': fiTitle.val(),
			'bdContent': fiContent.val(),
			'bdRegister': fiDate.val(),
			'bdPhoto' : fiPhotoName.val(),
			'filenames': fiFilenames.val()
		}, function(result) {
			console.log(fiFilenames.val().filename)
			console.log(result)
			console.log("===>", fiPhotoName.val())
			//location.href = "board.html";
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
		fiPhotoName.val(data.bdPhoto)
		
		
		console.log("---", data.bdPhoto)
		representPhoto.attr("src", "../../upload/" + data.bdPhoto + ".png")
		
		
		fiFilenames.val(data.photoList)
		console.log("data[0]:", data.photoList[0])
		//console.log("data[1]:", data.photoList[1])
		console.log(data.photoList.length)

		for (var i = 0; i <data.photoList.length; i++) {
			photo.attr("src", "../../upload/" + data.photoList[0] + ".png")
			photo1.attr("src", "../../upload/" + data.photoList[1] + ".png")
			photo2.attr("src", "../../upload/" + data.photoList[2] + ".png")
			photo3.attr("src", "../../upload/" + data.photoList[3] + ".png")
		}
	})



	$('#upd-btn').click(function() {
//		console.log(bdNo)
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


//$('#fi-photoupload').fileupload({
//url: 'upload.json',
//dataType: 'json',
//sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
//singleFileUploads: false, // 한 요청에 여러 개의 파일을 전송시키기.  
//done: function (e, data) { 
//console.log('done()...');
//console.log(data.result); // 서버가 보낸 JSON 객체는 data.result 에 보관되어 있다.

//var filenames = data.result.fileList;

//for (var i = 0; i <filenames.length-1 ; i++) {
//var val = fiFilenames.val();
//if (val.length > 0) val += ",";
//console.log('sssss')
//fiFilenames.val(val + filenames[i]);
//}
//}
//});
$('#represent-photo').fileupload({
	url: 'upload2.json',        // 서버에 요청할 URL
	dataType: 'json',         // 서버가 보낸 응답이 JSON임을 지정하기
	sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
	singleFileUploads: false, // 한 요청에 여러 개의 파일을 전송시키기.
	autoUpload: true,        // 파일을 추가할 때 자동 업로딩 하지 않도록 설정.
	disableImageResize: /Android(?!.*Chrome)|Opera/
		.test(window.navigator && navigator.userAgent), // 안드로이드와 오페라 브라우저는 크기 조정 비활성 시키기
		previewMaxWidth: 200,   // 미리보기 이미지 너비
		previewMaxHeight: 200,  // 미리보기 이미지 높이 
		previewCrop: true,      // 미리보기 이미지를 출력할 때 원본에서 지정된 크기로 자르기
		processalways: function(e, data) {
			console.log('대표사진 등록ㅇ...');
			console.log(data.files);
			
			var imagesDiv = $('#represent-images');
			imagesDiv.html("");
			for (var i = 0; i < data.files.length; i++) {
				try {
					if (data.files[i].preview.toDataURL) {
						$("<img>").attr('src', data.files[i].preview.toDataURL()).css('width', '200px').appendTo(imagesDiv);
					}
				} catch (err) {}
			}
		/*	$('#upload-btn').unbind("click");
			$('#upload-btn').click(function() {
				data.submit();
			});*/
		}, 
		
		done: function (e, data) { 
			console.log('done()...');
			console.log(data.result); // 서버가 보낸 JSON 객체는 data.result 에 보관되어 있다.

			var filename = data.result.fileList2;
			console.log(filename)
			//for (var i = 0; i <filenames.length ; i++) {
	//			var val = fiPhotoName.val();
				//if (val.length > 0) val += ",";
			//	console.log('대표사진등록')
			//	fiPhotoName.val(val + representname);


				//for (var i = 0; i <filename.length ; i++) {
					var val = fiPhotoName.val();
					//if (val.length > 0) val += ",";
					console.log('대표사진등록')
					fiPhotoName.val(val + filename);


				//};
				
			
		}
});





$('#fi-photoupload').fileupload({
	url: 'upload.json',        // 서버에 요청할 URL
	dataType: 'json',         // 서버가 보낸 응답이 JSON임을 지정하기
	sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
	singleFileUploads: false, // 한 요청에 여러 개의 파일을 전송시키기.
	autoUpload: true,        // 파일을 추가할 때 자동 업로딩 하지 않도록 설정.
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
						$("<img>").attr('src', data.files[i].preview.toDataURL()).css('width', '100px').appendTo(imagesDiv);
					}
				} catch (err) {}
			}
//			$('#upload-btn').unbind("click");
//			$('#upload-btn').click(function() {
//				data.submit();
//			});
		}, 
		submit: function (e, data) { // 서버에 전송하기 직전에 호출된다.
			console.log(data.result);
		}, 

		
		done: function (e, data) { 
			console.log('done()...');
			console.log(data.result); // 서버가 보낸 JSON 객체는 data.result 에 보관되어 있다.

			var filenames = data.result.fileList;

			for (var i = 0; i <filenames.length ; i++) {
				var val = fiFilenames.val();
				if (val.length > 0) val += ",";
				console.log('sssss')
				fiFilenames.val(val + filenames[i]);


			};
		}
});




