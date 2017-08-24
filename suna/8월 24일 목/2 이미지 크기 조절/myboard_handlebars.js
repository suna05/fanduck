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
		fiRegister = $('#fi-rdt'),
		searchValue = $('#value'),
		searchBtn = $('#btn-search'),
		representPhoto = $('#representPhoto')
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


$(document.body).on('click', '#all-btn', function(event) {
	//location.href='view.html?mpNo=' + $('.row').attr('data-mpNo')
	location.href='board.html?mpno='+ mpNo 
	
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
  
	var totalCount = result.data.totalCount;
  // 템플릿 소스를 가지고 템플릿을 처리할 함수를 얻는다.
  var templateFn = Handlebars.compile($('#board-template').text())
  var generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.

  tbody.text('') // tbody의 기존 tr 태그들을 지우고
  tbody.html(generatedHTML) // 새 tr 태그들로 설정한다.

// / displayList4()
  

  }) // getJSON()
} // displayList()




/*검색할 때 엔터*/
function a()
{
	console.log(mpNo)
     if(event.keyCode == 13)
     {
    	 $.getJSON('/board/list.json',{'mpNo':mpNo}, function(result) {
    	 displayList2()
    	 })
     }
}




$('#btn-search').click(function() {
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
displayList()
//////////////////////////////////


$('#list-btn').unbind('click').on('click', function(e) {
	//console.log("ddddd")
	location.href = "board.html?mpno=" + mpNo;
})


if (bdNo == 0) { // 새 게시글 등록
	viewTags.css('display', 'none')
	$('#add-btn').unbind('click').on('click', function(e) {
	
		console.log(fiMpNo.val())
		
			$.post('/board/add.json', {
					'mpNo' : mpNo,
					'bdTitle': fiTitle.val(),
					'bdContent': fiContent.val(),
					'bdRegister': fiDate.val(),
					'bdPhoto' : fiPhotoName.val(),
					'bdList1' : fiList1.val(),
					'bdList2' : fiList2.val(),
					'bdList3' : fiList3.val(),
					'bdList4' : fiList4.val(),
					'bdList5' : fiList5.val(),
					'bdList6' : fiList6.val(),
					'bdList7' : fiList7.val(),
					'bdList8' : fiList8.val(),
					'bdList9' : fiList9.val()
			}, function(result) {
					swal({
					  title: "글 등록 중",
					  text: "기다려주세요",
					  timer: 50000,
					  showConfirmButton: false
					});	
				
				setTimeout("location.href='board.html?mpno='+ mpNo ",5000);

				
			}, 'json')
	})
	
} else { // 게시글 정보 조회

	newTags.css('display', 'none')

	$.getJSON('/board/detail.json', {'bdNo': bdNo}, function(result) {

		displayPhotoList1()
		displayPhotoList2()
		displayPhotoList3()
		displayPhotoList4()
		displayPhotoList5()
		displayPhotoList6()
		displayPhotoList7()
		displayPhotoList8()
		displayPhotoList9()
		
		
		
		
	var data = result.data
	fiBdNo.text(data.bdNo)
	fiMpNo.text(data.mpNo)
	fiTitle.val(data.bdTitle)
	fiContent.val(data.bdContent)
	fiDate.val(data.bdRegister)
	fiPhotoName.val(data.bdPhoto)
	fiList1.val(data.bdList1)
	fiList2.val(data.bdList2)
	fiList3.val(data.bdList3)
	fiList4.val(data.bdList4)
	fiList5.val(data.bdList5)
	fiList6.val(data.bdList6)
	fiList7.val(data.bdList7)
	fiList8.val(data.bdList8)
	fiList9.val(data.bdList9)

	representPhoto.attr("src", "../../upload/" + data.bdPhoto + ".png")
	

	

})

$('#list-btn').unbind('click').on('click', function(e) {
	//console.log("ddddd")
	location.href = "board.html?mpno=" + mpNo;
})




$('#upd-btn').unbind('click').on('click', function(e) {
	$.post('/board/update.json', {
			'bdNo': bdNo,
			'bdTitle': fiTitle.val(),
			'bdContent': fiContent.val(),
			'bdRegister': fiDate.val(),
			'bdPhoto' : fiPhotoName.val(),
			'bdList1' : fiList1.val(),
			'bdList2' : fiList2.val(),
			'bdList3' : fiList3.val(),
			'bdList4' : fiList4.val(),
			'bdList5' : fiList5.val(),
			'bdList6' : fiList6.val(),
			'bdList7' : fiList7.val(),
			'bdList8' : fiList8.val(),
			'bdList9' : fiList9.val()
			
			
			
		}, function(result) {
			swal({
			  title: "변경사항 저장 중",
			  text: "기다려주세요",
			  timer: 30000,
			  showConfirmButton: false
			});	
			setTimeout("location.href='board.html?mpno='+ mpNo ",2000);
			//location.href='board.html?mpno='+ mpNo
		}, 'json')
	})

	$('#del-btn').unbind('click').on('click', function(e) {
		$.getJSON('/board/delete.json', {'bdNo': bdNo}, function(result) {
			swal({
			  title: "게시글을 삭제하시겠습니까?",
			  type: "warning",
			  showCancelButton: true,
			  confirmButtonColor: "#DD6B55",
			  confirmButtonText: "삭제",
			  cancelButtonText: "취소",
			  closeOnConfirm: false,
			  closeOnCancel: false
		},
		function(isConfirm){
			  if (isConfirm) {
			    swal("삭제되었습니다.");   
			  	location.href = "board.html?mpno=" + mpNo;
			  } else {
			    swal("취소");
			  }
			});
	
			
			
		})
	})


}
////////////////////////
//list 각각 삭제버튼

$('#list-del').unbind('click').on('click', function(e) {
	
		swal({
		  title: "사진을 삭제하시겠습니까?",
		  text: "삭제한 후에 글을 저장하셔야 적용됩니다.",
		  type: "warning",
		  showCancelButton: true,
		  confirmButtonColor: "#DD6B55",
		  confirmButtonText: "삭제",
		  cancelButtonText: "취소",
		  closeOnConfirm: false,
		  closeOnCancel: false
		},
function(isConfirm){
	  if (isConfirm) {
	  	$('#list1').val('')
	  	$('#list1-images').empty()
	    swal("삭제 완료", "삭제 성공", "success");   

	  } else {
	    swal("취소", "삭제 취소", "error");
	  }
	 
	  $('#list1').empty('')
	});
		
})



$('#list-del2').unbind('click').on('click', function(e) {
		console.log("bdList2", fiList2.val())
	
	swal({
	  title: "사진을 삭제하시겠습니까?",
	  text: "삭제한 후에 글을 저장하셔야 적용됩니다.",
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonColor: "#DD6B55",
	  confirmButtonText: "삭제",
	  cancelButtonText: "취소",
	  closeOnConfirm: false,
	  closeOnCancel: false
},
function(isConfirm){
	  if (isConfirm) {
	  	$('#list2').val('')
	  	console.log("bdList2", fiList2.val())
	  		$('#list2-images').empty()
	  
	  		 swal("삭제 완료", "삭제 성공", "success");   

	  } else {
	    swal("취소", "삭제 취소", "error");
	  }
	  $('#list2').empty('')
	});
		
})



$('#list-del3').unbind('click').on('click', function(e) {
		console.log("bdList3", fiList3.val())
	
	swal({
	  title: "사진을 삭제하시겠습니까?",
	  text: "삭제한 후에 글을 저장하셔야 적용됩니다.",
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonColor: "#DD6B55",
	  confirmButtonText: "삭제",
	  cancelButtonText: "취소",
	  closeOnConfirm: false,
	  closeOnCancel: false
},
function(isConfirm){
	  if (isConfirm) {
	  	$('#list3').val('')
	  	console.log("bdList3", fiList1.val())
	  		$('#list3-images').empty()
	  
	  		 swal("삭제 완료", "삭제 성공", "success");   

	  } else {
	    swal("취소", "삭제 취소", "error");
	  }
	  $('#list3').empty('')
	});
		
})


$('#list-del4').unbind('click').on('click', function(e) {
		console.log("bdList4", fiList4.val())
	
	swal({
	  title: "사진을 삭제하시겠습니까?",
	  text: "삭제한 후에 글을 저장하셔야 적용됩니다.",
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonColor: "#DD6B55",
	  confirmButtonText: "삭제",
	  cancelButtonText: "취소",
	  closeOnConfirm: false,
	  closeOnCancel: false
},
function(isConfirm){
	  if (isConfirm) {
	  	$('#list4').val('')
	  	console.log("bdList4", fiList4.val())
	  		$('#list4-images').empty()
	 	 swal("삭제 완료", "삭제 성공", "success");   

	  } else {
	    swal("취소", "삭제 취소", "error");
	  }
	  $('#list4').empty('')
	});
		
})



$('#list-del5').unbind('click').on('click', function(e) {
	
	swal({
	  title: "사진을 삭제하시겠습니까?",
	  text: "삭제한 후에 글을 저장하셔야 적용됩니다.",
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonColor: "#DD6B55",
	  confirmButtonText: "삭제",
	  cancelButtonText: "취소",
	  closeOnConfirm: false,
	  closeOnCancel: false
},
function(isConfirm){
	  if (isConfirm) {
	  	$('#list5').val('')
	  	console.log("bdList5", fiList5.val())
	  		$('#list5-images').empty()
	  
	  	swal("삭제 완료", "삭제 성공", "success");   

	  } else {
	    swal("취소", "삭제 취소", "error");
	  }
	  $('#list5').empty('')
	});
		
})




$('#list-del6').unbind('click').on('click', function(e) {
	
	swal({
	  title: "사진을 삭제하시겠습니까?",
	  text: "삭제한 후에 글을 저장하셔야 적용됩니다.",
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonColor: "#DD6B55",
	  confirmButtonText: "삭제",
	  cancelButtonText: "취소",
	  closeOnConfirm: false,
	  closeOnCancel: false
},
function(isConfirm){
	  if (isConfirm) {
	  	$('#list6').val('')
	  	console.log("bdList6", fiList6.val())
	  		$('#list6-images').empty()
	  
	  		 swal("삭제 완료", "삭제 성공", "success");   

	  } else {
	    swal("취소", "삭제 취소", "error");
	  }
	  $('#list6').empty('')
	});
		
})



$('#list-del7').unbind('click').on('click', function(e) {
	
	swal({
	  title: "사진을 삭제하시겠습니까?",
	  text: "삭제한 후에 글을 저장하셔야 적용됩니다.",
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonColor: "#DD7B55",
	  confirmButtonText: "삭제",
	  cancelButtonText: "취소",
	  closeOnConfirm: false,
	  closeOnCancel: false
},
function(isConfirm){
	  if (isConfirm) {
	  	$('#list7').val('')
	  	console.log("bdList7", fiList7.val())
	  		$('#list7-images').empty()
	  
	  		 swal("삭제 완료", "삭제 성공", "success");   

	  } else {
	    swal("취소", "삭제 취소", "error");
	  }
	  $('#list7').empty('')
	});
		
})



$('#list-del8').unbind('click').on('click', function(e) {
	
	swal({
	  title: "사진을 삭제하시겠습니까?",
	  text: "삭제한 후에 글을 저장하셔야 적용됩니다.",
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonColor: "#DD8B55",
	  confirmButtonText: "삭제",
	  cancelButtonText: "취소",
	  closeOnConfirm: false,
	  closeOnCancel: false
},
function(isConfirm){
	  if (isConfirm) {
	  	$('#list8').val('')
	  	console.log("bdList8", fiList8.val())
	  		$('#list8-images').empty()
	  
	  		 swal("삭제 완료", "삭제 성공", "success");   

	  } else {
	    swal("취소", "삭제 취소", "error");
	  }
	  $('#list8').empty('')
	});
		
})



$('#list-del9').unbind('click').on('click', function(e) {
	
	swal({
	  title: "사진을 삭제하시겠습니까?",
	  text: "삭제한 후에 글을 저장하셔야 적용됩니다.",
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonColor: "#DD9B55",
	  confirmButtonText: "삭제",
	  cancelButtonText: "취소",
	  closeOnConfirm: false,
	  closeOnCancel: false
},
function(isConfirm){
	  if (isConfirm) {
	  	$('#list9').val('')
	  	console.log("bdList9", fiList9.val())
	  		$('#list9-images').empty()
	  
	  		 swal("삭제 완료", "삭제 성공", "success");   

	  } else {
	    swal("취소", "삭제 취소", "error");
	  }
	  $('#list9').empty('')
	});
		
})

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
function displayPhotoList1() {
  // 서버에서 사진 목록 데이터를 받아 온다.
  
	 $.getJSON('/board/detail.json',{'bdNo': bdNo},function(result) {
		  
		  var data = result.list1
		  
		  if(fiList1.val() == '')
		  	return;
		  
		  var $target = $('#list1-images')
		  var newEl = ''
		     newEl += [
		    	 '<a id="pop">' +
		    	 '<div onclick=popup()>' +
		        '<img src="/web/board/photo/'+ fiList1.val()+'.png" style="cursor:pointer;" >' +
		        '</div>' +
		        '</a>'
		     ].join('')
		  $target.html(newEl)
  
  }) // getJSON()
} // displayUpload()




//List2
function displayPhotoList2() {
  // 서버에서 사진 목록 데이터를 받아 온다.
  $.getJSON('/board/detail.json',{'bdNo': bdNo},function(result) {
  
  var data = result.list2
  
  if(fiList2.val() == '')
  	return;
  
  var $target = $('#list2-images')
  var newEl = ''
     newEl += [
    	 '<a id="pop2">' +
    	 '<div onclick=popup()>' +
        '<img src="/web/board/photo/'+ fiList2.val()+'.png" style="cursor:pointer;" >' +
        '</div>' +
        '</a>'
     ].join('')
  $target.html(newEl)
  
  
  }) // getJSON()
} // displayUpload()


//////////////////////////////////////List3


function displayPhotoList3() {
  // 서버에서 사진 목록 데이터를 받아 온다.
  $.getJSON('/board/detail.json',{'bdNo': bdNo},function(result) {
  
  var data = result.list3
  
  if(fiList3.val() == '')
  	return;
  
  var $target = $('#list3-images')
  var newEl = ''
     newEl += [
    	 '<a id="pop3">' +
    	 '<div onclick=popup()>' +
        '<img src="/web/board/photo/'+ fiList3.val()+'.png" style="cursor:pointer;" >' +
        '</div>' +
        '</a>'
     ].join('')
  $target.html(newEl)
  
  
  }) // getJSON()
} // displayUpload()

///////////////////////
function displayPhotoList4() {
  // 서버에서 사진 목록 데이터를 받아 온다.
  
	 $.getJSON('/board/detail.json',{'bdNo': bdNo},function(result) {
		  
		  var data = result.list4
		  
		  if(fiList4.val() == '')
		  	return;
		  
		  var $target = $('#list4-images')
		  var newEl = ''
		     newEl += [
		    	 '<a id="pop4">' +
		    	 '<div onclick=popup()>' +
		        '<img src="/web/board/photo/'+ fiList4.val()+'.png" style="cursor:pointer;" >' +
		        '</div>' +
		        '</a>'
		     ].join('')
		  $target.html(newEl)
  
  }) // getJSON()
} // displayUpload()

///////////////////////
function displayPhotoList5() {
  // 서버에서 사진 목록 데이터를 받아 온다.
  
	 $.getJSON('/board/detail.json',{'bdNo': bdNo},function(result) {
		  
		  var data = result.list5
		  
		  if(fiList5.val() == '')
		  	return;
		  
		  var $target = $('#list5-images')
		  var newEl = ''
		     newEl += [
		    	 '<a id="pop5">' +
		    	 '<div onclick=popup()>' +
		        '<img src="/web/board/photo/'+ fiList5.val()+'.png" style="cursor:pointer;" >' +
		        '</div>' +
		        '</a>'
		     ].join('')
		  $target.html(newEl)
  
  }) // getJSON()
} // displayUpload()



//////////////////



function displayPhotoList6() {
  // 서버에서 사진 목록 데이터를 받아 온다.
  
	 $.getJSON('/board/detail.json',{'bdNo': bdNo},function(result) {
		  
		  var data = result.list6
		  
		  if(fiList6.val() == '')
		  	return;
		  
		  var $target = $('#list6-images')
		  var newEl = ''
		     newEl += [
		    	 '<a id="pop6">' +
		    	 '<div onclick=popup()>' +
		        '<img src="/web/board/photo/'+ fiList6.val()+'.png" style="cursor:pointer;" >' +
		        '</div>' +
		        '</a>'
		     ].join('')
		  $target.html(newEl)
  
  }) // getJSON()
} // displayUpload()



////////////////////////
function displayPhotoList7() {
  // 서버에서 사진 목록 데이터를 받아 온다.
  
	 $.getJSON('/board/detail.json',{'bdNo': bdNo},function(result) {
		  
		  var data = result.list7
		  
		  if(fiList7.val() == '')
		  	return;
		  
		  var $target = $('#list7-images')
		  var newEl = ''
		     newEl += [
		    	 '<a id="pop7">' +
		    	 '<div onclick=popup()>' +
		        '<img src="/web/board/photo/'+ fiList7.val()+'.png" style="cursor:pointer;" >' +
		        '</div>' +
		        '</a>'
		     ].join('')
		  $target.html(newEl)
  
  }) // getJSON()
} // displayUpload()

////////////////////////
function displayPhotoList8() {
  // 서버에서 사진 목록 데이터를 받아 온다.
  
	 $.getJSON('/board/detail.json',{'bdNo': bdNo},function(result) {
		  
		  var data = result.list8
		  
		  if(fiList8.val() == '')
		  	return;
		  
		  var $target = $('#list8-images')
		  var newEl = ''
		     newEl += [
		    	 '<a id="pop8">' +
		    	 '<div onclick=popup()>' +
		        '<img src="/web/board/photo/'+ fiList8.val()+'.png" style="cursor:pointer;" >' +
		        '</div>' +
		        '</a>'
		     ].join('')
		  $target.html(newEl)
  
  }) // getJSON()
} // displayUpload()

////////////////////////
function displayPhotoList9() {
  // 서버에서 사진 목록 데이터를 받아 온다.
  
	 $.getJSON('/board/detail.json',{'bdNo': bdNo},function(result) {
		  
		  var data = result.list9
		  
		  if(fiList9.val() == '')
		  	return;
		  
		  var $target = $('#list9-images')
		  var newEl = ''
		     newEl += [
		    	 '<a id="pop9">' +
		    	 '<div onclick=popup()>' +
		        '<img src="/web/board/photo/'+ fiList9.val()+'.png" style="cursor:pointer;" >' +
		        '</div>' +
		        '</a>'
		     ].join('')
		  $target.html(newEl)
  
  }) // getJSON()
} // displayUpload()

////////////////////////