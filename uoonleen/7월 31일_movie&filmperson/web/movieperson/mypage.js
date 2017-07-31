var mpList = $('#mp-array')

/*
 * $(document.body).on('click', '.detail-link', function(event) {
  location.href = 'view.html?no=' + $(this).attr('data-no') 
  event.preventDefault()
})
*/
  $.getJSON('../../movieperson/list.json', function(result) {
    var templateFn = Handlebars.compile($('#mp-template').text())
	var generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
//	mpList.text('') // tbody의 기존 tr 태그들을 지우고
	
	mpList.html(generatedHTML) // 새 tr 태그들로 설정한다.
  }) // getJSON()
  
  function deletePerson(no, nickname) {
	  console.log(no + ' : ' + nickname)
	 swal({
	  title: nickname + ' 님을 지우시겠습니까?',
	  text: "지우실 경우 모든 자료가 날아갑니다.",
	  type: "warning",
	  showCancelButton: true,
	  cancelButtonText: "취소",
	  confirmButtonColor: "#DD6B55",
	  confirmButtonText: "예, 지우겠습니다.",
	  closeOnConfirm: false
	 },
      function(){
		 $.getJSON('/movieperson/delete.json', {
	      'mpNo': parseInt(no)
	    	}, function(result) {
	     })
		 swal({
		  title: "삭제 완료!",
		  text: nickname + " 님을 성공적으로 지웠습니다.",
		  timer: 2000,
		  showConfirmButton: false
		 }, function() {
		    window.location.href = '/web/movieperson/mypage.html';
		 });
		
	   });

  }
