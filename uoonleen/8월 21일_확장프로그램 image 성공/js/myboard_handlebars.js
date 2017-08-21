var tbody = $('#board-ex'),
	tbodyy = $('#board-exx'),
	searchValue = $('#value');

var mpNo = 0

try {
	mpNo = location.href.split('?')[1].split('=')[1]
} catch (err) {}



$(document.body).on('click', '.detail-link', function(event) {
	location.href='board.html?no=' + $(this).attr('data-no')
	event.preventDefault()
})



var bdNo = 0

try {
	bdNo = location.href.split('?')[1].split('=')[1]
} catch (err) {}

$(document.body).on('click', '.detail-link', function(event) {
	location.href='view.html?bdNo=' + $(this).attr('data-no')
	event.preventDefault()
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



