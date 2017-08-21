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
		//fiFilenames = $('#fi-filenames'),
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
		tbodyy = $('#board-exx'),
		fiList1 = $('#list1'),
		fiList2 = $('#list2'),
		fiList3 = $('#list3'),
		fiList4 = $('#list4'),
		fiList5 = $('#list5'),
		fiList6 = $('#list6'),
		fiList7 = $('#list7'),
		fiList8 = $('#list8'),
		fiList9 = $('#list9');

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
			'bdList1' : fiList1.val(),
			'bdList2' : fiList2.val()
			//'filenames': fiFilenames.val()
		}, function(result) {
			//console.log(fiFilenames.val().filename)
			console.log(result)
			console.log(mpNo)
			//console.log(fiList1.val(files1))
			
			console.log("===>", fiTitle.val())
			console.log("===>", fiPhotoName.val())
			console.log("bdList1", fiList1.val())
			console.log("bdList2", fiList2.val())
			//location.href = "board.html?mpno=" + mpNo;
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
	fiList1.val(data.bdList1)
	fiList2.val(data.bdList2)
	console.log("---", data.bdPhoto)
	representPhoto.attr("src", "../../upload/" + data.bdPhoto + ".png")
	

	

})

$('#list-btn').unbind('click').on('click', function(e) {
	//console.log("ddddd")
	location.href = "board.html?mpno=" + mpNo;
})
	
$('.close').unbind('click').on('click', function(e) {
	console.log("모달 닫힘~~~")
	//location.href = "view.html?mpNo=" + mpNo + "&bdNo=" + bdNo;

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
			location.href = "board.html?mpno=" + mpNo;
		})
	})


}
////////////////////////


/*
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
displayList()*/




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
 		    	location.href = "board.html?mpNo=" + mpNo
 		    })
   }
 });

///////////////////////////////////////
 ///List1
//핸들바스 - detail창에서 list1 뜨게함.
function displayList1() {
  // 서버에서 사진 목록 데이터를 받아 온다.
  
	 $.getJSON('/board/detail.json',{'bdNo': bdNo},function(result) {
		  console.log(result)
		  
		  var data = result.list1
		  console.log("data1=>", data)
		  
		  if(fiList1.val() == '')
		  	return;
		  
		  var $target = $('#list1-images')
		  var newEl = ''
		     newEl += [
		    	 '<a class="pop">' +
		        '<img src="/web/board/photo/'+ fiList1.val()+'.png" style="height: 190px; max-width: 90%; cursor:pointer;" >' +
		        '</a>'
		     ].join('')
		  $target.html(newEl)
  
  }) // getJSON()
} // displayUpload()

displayList1()



//List2
function displayList2() {
  // 서버에서 사진 목록 데이터를 받아 온다.
  $.getJSON('/board/detail.json',{'bdNo': bdNo},function(result) {
  console.log(result)
  
  var data = result.list2
  console.log("data2=>", data)
  
  if(fiList2.val() == '')
  	return;
  
  var $target = $('#list2-images')
  var newEl = ''
     newEl += [
        '<img src="/web/board/photo/'+ fiList2.val() +'.png" style="height: 190px; max-width: 90%;">'
     ].join('')
  $target.html(newEl)
  
  
  }) // getJSON()
} // displayUpload()

displayList2()

//////////////////////////////////////List3


function displayList3() {
  // 서버에서 사진 목록 데이터를 받아 온다.
  $.getJSON('/board/detail.json',{'bdNo': bdNo},function(result) {
  console.log(result)
  
  var data = result.list2
  console.log("data3=>", data)
  
  if(fiList2.val() == '')
  	return;
  
  var $target = $('#list3-photo')
  var newEl = ''
     newEl += [
        '<img src="/web/board/photo/'+ fiList3.val() +'.png" style="height: 190px; max-width: 90%;">'
     ].join('')
  $target.html(newEl)
  
  
  }) // getJSON()
} // displayUpload()

displayList3()
///////////////////////

$('#b1').unbind('click').on('click', function(e) {
	event.preventDefault()
	console.log("ddddddddd");
	
	
	
})
