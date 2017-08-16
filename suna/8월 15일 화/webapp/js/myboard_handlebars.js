var viewTags = $('.bit-view'),
		newTags = $('.bit-new'),
		//fiNo = $('#fi-no'),
		fiBdNo = $('#fi-bdNo'),
		fiMpNo = $('#fi-mpNo'),
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
		photoGallay = $('#view-photo'),
		tbody = $('#board-ex'),
		tbodyy = $('#board-exx');

var mpNo = 0

try {
	mpNo = location.href.split('?')[1].split('=')[1]
} catch (err) {}



$(document.body).on('click', '.detail-link', function(event) {
	location.href='board.html?no=' + $(this).attr('data-no')
	event.preventDefault()
})
/////////////////////////////////////////////////////////////

$(document.body).on('click', '.write-link', function(event) {
	//location.href='view.html?mpNo=' + $('.row').attr('data-mpNo')
		location.href='view.html?mpNo=' + mpNo
	
	event.preventDefault()
})



//////////////////////////////////////////////////////////////
var bdNo = 0

try {
	mpNo = location.href.split('?')[1].split('=')[1].split('&')[0]
	bdNo = location.href.split('&')[1].split('=')[1]
} catch (err) {}

$(document.body).on('click', '.detail-link', function(event) {
	location.href='view.html?mpNo=' + $(this).attr('data-mpNo') + '&bdNo=' + $(this).attr('data-no') 
	event.preventDefault()
})
//////////////////////////////////
$('#btn-search').click(function() {
	console.log("검색버튼 눌렀네")
	
	
	displayList2()
	console.log(searchValue.val())
})

function displayList2() {
$.getJSON('/board/searchList.json', {
		'value' : '%' + searchValue.val() + '%'
	}, function(result) {
		console.log(result)
		tbody.text('')
		var totalCount = result.data.totalCount;

  // 템플릿 소스를 가지고 템플릿을 처리할 함수를 얻는다.
  var templateFn = Handlebars.compile($('#board-template').text())
  var generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.

  tbodyy.text('') // tbody의 기존 tr 태그들을 지우고
  tbodyy.html(generatedHTML) // 새 tr 태그들로 설정한다.
  
  
	})
}







function displayList() {
  // 서버에서 강사 목록 데이터를 받아 온다.
	console.log(mpNo)
  $.getJSON('/board/list.json',{'mpNo':mpNo}, function(result) {
  console.log(result)
  
  var data = result.data
  console.log("data=>", data.photoList)
  
	var totalCount = result.data.totalCount;
  // 템플릿 소스를 가지고 템플릿을 처리할 함수를 얻는다.
  var templateFn = Handlebars.compile($('#board-template').text())
  var generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.

  tbody.text('') // tbody의 기존 tr 태그들을 지우고
  tbody.html(generatedHTML) // 새 tr 태그들로 설정한다.


  }) // getJSON()
} // displayList()



$('#btn-search').click(function() {
	console.log("검색버튼 눌렀네")
	
	
	displayList2()
	console.log(searchValue.val())
})

function displayList2() {
$.getJSON('/board/searchList.json', {
		'value' : '%' + searchValue.val() + '%'
	}, function(result) {
		console.log(result)
		tbody.text('')
		var totalCount = result.data.totalCount;

  // 템플릿 소스를 가지고 템플릿을 처리할 함수를 얻는다.
  var templateFn = Handlebars.compile($('#board-template').text())
  var generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.

  tbodyy.text('') // tbody의 기존 tr 태그들을 지우고
  tbodyy.html(generatedHTML) // 새 tr 태그들로 설정한다.
  
  
	})
}
displayList(1)
//////////////////////////////////


if (bdNo == 0) { // 새 게시글 등록
	viewTags.css('display', 'none')
$('#add-btn').unbind('click').on('click', function(e) {
		/*console.log(fiFilenames.val())
		if(fiFilenames.val() == null) {
  		filenames == "default";
  	}*/
	console.log(fiMpNo.val())
		$.post('/board/add.json', {
			//'bdNo' : fiBdNo.val(),
			'mpNo' : mpNo,
//			'mpNo' : "9",
			'bdTitle': fiTitle.val(),
			'bdContent': fiContent.val(),
			'bdRegister': fiDate.val(),
			'bdPhoto' : fiPhotoName.val(),
			'filenames': fiFilenames.val()
		}, function(result) {
			//console.log(fiFilenames.val().filename)
			console.log(result)
			console.log(mpNo)
			//console.log("===>", fiPhotoName.val())
			location.href = "board.html?mpno=" + mpNo;
		}, 'json')
	})
} else { // 게시글 정보 조회

	newTags.css('display', 'none')

	$.getJSON('/board/detail.json', {'bdNo': bdNo}, function(result) {
	var data = result.data
	fiBdNo.text(data.bdNo)
	fiMpNo.text(data.mpNo)
	fiTitle.val(data.bdTitle)
	fiContent.val(data.bdContent)
	fiDate.val(data.bdRegister)
	fiPhotoName.val(data.bdPhoto)
	console.log("---", data.bdPhoto)
	representPhoto.attr("src", "../../upload/" + data.bdPhoto + ".png")
	
	fiFilenames.val(data.photoList)
	//console.log("data[0]:", data.photoList[0])
	//console.log("data[1]:", data.photoList[1])
	//console.log(data.photoList.length)

	
	displayUpload(1)

})

$('#list-btn').unbind('click').on('click', function(e) {
	//console.log("ddddd")
	location.href = "board.html?mpno=" + mpNo;
})


	$('#upd-btn').unbind('click').on('click', function(e) {
//		console.log(bdNo)
		console.log(fiFilenames.val())
		$.post('/board/update.json', {
			'bdNo': bdNo,
			'bdTitle': fiTitle.val(),
			'bdContent': fiContent.val(),
			'bdRegister': fiDate.val(),
			'bdPhoto' : fiPhotoName.val(),
			'filenames': fiFilenames.val(),
			'photoList' : fiFilenames.val()
			
			
			
		}, function(result) {
			console.log(result)
			console.log(fiFilenames.val())
			//location.href = 'board.html'
		}, 'json')
	})

	$('#del-btn').unbind('click').on('click', function(e) {
		$.getJSON('/board/delete.json', {'bdNo': bdNo}, function(result) {
			location.href = 'board.html'
		})
	})


}
////////////////////////


//핸들바스 - detail창에서 photoList 뜨게함.
function displayUpload() {
  // 서버에서 사진 목록 데이터를 받아 온다.
  $.getJSON('/board/detail.json',{'bdNo': bdNo},function(result) {
  console.log(result)
  
  var data = result.data.photoList
  console.log("data=>", data)
  
  var $target = $('#view-photo')
  var newEl = ''
  for (let i = 0; i < data.length; i++) {
     newEl += [
        '<img src="/upload/'+ data[i] +'.png">'
     ].join('')
  }
  $target.html(newEl)
  
  
  }) // getJSON()
} // displayUpload()



$('#change').unbind('click').on('click', function(e) {
	
console.log("버튼 눌렀땅!!")
console.log("000데이터", fiFilenames)
$.getJSON('/board/detail.json',{'bdNo': bdNo}, function(result) {
  console.log(result)
  
  var data = result.data.photoList
  console.log("data=>", data)
  
  console.log("사진바꾸기", data)
  
  $('#fi-filenames').val('');
  console.log("초기화1", data)
 
  
  $('#change').fileupload({
  	url: '/board/upload.json',        // 서버에 요청할 URL
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
  			console.log('리스트 변경@@@@()...');
  			console.log("초기화 후", data)
  			var imagesDiv = $('#images-div');
  			imagesDiv.html("");
  			for (var i = 0; i < data.files.length; i++) {
  				try {
  					if (data.files[i].preview.toDataURL) {
  						$("<img>").attr('src', data.files[i].preview.toDataURL()).css('width', '100px').appendTo(imagesDiv);
  					}
  				} catch (err) {}
  			}
//  			$('#upload-btn').unbind("click");
//  			$('#upload-btn').click(function() {
//  				data.submit();
//  			});
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
  				console.log('사진----변경-----사진----변경')
  				fiFilenames.val(val + filenames[i]);
  				console.log(fiFilenames.val(val + filenames[i]))

  			};
  		}
  });
  
  
  }) // getJSON()


})




function displayList() {
  // 서버에서 강사 목록 데이터를 받아 온다.
	console.log(mpNo)
  $.getJSON('/board/list.json',{'mpNo':mpNo}, function(result) {
  console.log(result)
  
  var data = result.data
  console.log("data=>", data.photoList)
  
	var totalCount = result.data.totalCount;
  // 템플릿 소스를 가지고 템플릿을 처리할 함수를 얻는다.
  var templateFn = Handlebars.compile($('#board-template').text())
  var generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.

  tbody.text('') // tbody의 기존 tr 태그들을 지우고
  tbody.html(generatedHTML) // 새 tr 태그들로 설정한다.


  }) // getJSON()
} // displayList()
displayList()




////////////////////////////////
personDetail()

var photoPath,
	isPhoto = false;

function personDetail() {
$.getJSON('/auth/userinfo.json', function(result) {
    if (result.data) {
      mno = result.data.mno
      
      $.getJSON('../../movieperson/detail.json', {'mno':mno, 'mpNo':mpNo }, 
	    function(result) {
    	  console.log("board.html의 mno : " + mno + " : " + mpNo)
    	    var mpProfile = $('.person-profile')
	  		photoPath = result.data.mpPhotopath
	        var templateFn = Handlebars.compile($('#one-mp-template').text())
	  	    var generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
	  	  console.log(generatedHTML)
	  	  mpProfile.text('') // tbody의 기존 tr 태그들을 지우고
	  	  mpProfile.html(generatedHTML) // 새 tr 태그들로 설정한다.
 	   }) // getJSON()
 	   
    }
 })
}

var personInfo = $('#fileupload-personinfo')
  
function personUpload() {
$.getJSON('/auth/userinfo.json', function(result) {
    if (result.data) {
      mno = result.data.mno
      console.log("board.html의 mno : " + mno + " : " + mpNo)
      
      $.getJSON('../../movieperson/detail.json', {'mno':mno, 'mpNo':mpNo }, 
	    function(result) {
    	    var mpProfile = $('#fileupload-personinfo')
	  		console.log(result)
	        var templateFn = Handlebars.compile($('#fileupload-personInfo-template').text())
	  	    var generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
	  	  console.log(generatedHTML)
	  	  mpProfile.text('') // tbody의 기존 tr 태그들을 지우고
	  	  mpProfile.html(generatedHTML) // 새 tr 태그들로 설정한다.
 	   }) // getJSON()
 	   
    }
 })
}

 $('#mpimg-upload').fileupload({
	  url: '../../movieperson/update.json',        // 서버에 요청할 URL
	  dataType: 'json',         // 서버가 보낸 응답이 JSON임을 지정하기
	  sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
	  singleFileUploads: false, // 한 요청에 여러 개의 파일을 전송시키기.
	  autoUpload: false,        // 파일을 추가할 때 자동 업로딩 하지 않도록 설정.
	  disableImageResize: /Android(?!.*Chrome)|Opera/
	        .test(window.navigator && navigator.userAgent), // 안드로이드와 오페라 브라우저는 크기 조정 비활성 시키기
	  previewMaxWidth: 200,   // 미리보기 이미지 너비
	  previewMaxHeight: 200,  // 미리보기 이미지 높이 
	  processalways: function(e, data) {
	      console.log('fileuploadprocessalways()...');
	      console.log(data.files);
	      
	      var imagesDiv = $('#images-div2');
	      imagesDiv.text("");
	      for (var i = 0; i < data.files.length; i++) {
	        try {
	          if (data.files[i].preview.toDataURL) {
	            $("<img>").attr('src', data.files[i].preview.toDataURL()).attr('id', '#mp-img-uploaded').css('height', 'auto').css('width', 'auto').appendTo(imagesDiv);
	          }
	        } catch (err) {}
	      }
	      
	      isPhoto = true;
	      
	      $('#mpupload-btn').unbind("click");
	      $('#mpupload-btn').click(function() {
	          data.submit();
	      });
	  }, 
	  submit: function (e, data) { // 서버에 전송하기 직전에 호출된다.
		console.log("submit mno, mpNo : " + mno + ", " + mpNo)
	    data.formData = { 
			mpContent: $('#mp-intro').val(),
			mno: mno,
		    mpNo: mpNo
	    };
	  }, 
	  done: function (e, data) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
    	isPhoto = false
	    location.href = "board.html?no=" + mpNo
	   
	  }
	});
		

 $('#mpupload-btn').click(function() {
   if (isPhoto == false) {
	 console.log($('#mp-intro'))
     $.post('../../movieperson/update.json', 
    	   {
    	 	 mpContent: $('#mp-intro').val(),
 			 mno: mno,
 		     mpNo: mpNo,
 		     mpPhotopath: photoPath 
 		    }, function(result) {
 		    	location.href = "board.html?no=" + mpNo
 		    })
   }
 });



