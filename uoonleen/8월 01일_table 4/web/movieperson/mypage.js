var mpList = $('#mp-array')

  $.getJSON('../../movieperson/list.json', function(result) {
    var templateFn = Handlebars.compile($('#mp-template').text())
	var generatedHTML = templateFn(result.data) 
	
	mpList.html(generatedHTML)
  })
  
  function deletePerson(no, nickname, mpCode) {
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
	     console.log(no)

	     $.getJSON('/filmperson/delete.json', {
	      'fpCode': mpCode
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
