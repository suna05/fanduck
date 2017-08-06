  function deletePerson(mno, mpNo, nickname, mpCode) {
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
	      'mpNo': parseInt(mpNo)
	    	}, function(result) {
	     })
	     console.log(mpNo)
	     
	     $.getJSON('/castmember/delete.json', {
	      'fpCode': mpCode,
	      'mno': mno
	    	}, function(result) {
	     })
	     
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
  
  
  function deleteCastMember(mno, mvNo, fpCode, mvDay) {
	  var movieOpenDay = mvDay
	  $('#alarmText' + fpCode).parents('.alarmList').animate({ opacity: 'hide' }, 'slow');
	  
//	  $('.' + parseInt(movieOpenDay.substring(10, 12)))
//	  .css('background-color', '#FAFAFA').css('color', '#B9B9B9');
//	  $('.alarmText .glyphicon-remove').click(function() {
//		  $(this).parents('.panel').animate({ opacity: 'hide' }, 'slow');
//		});
	
	  /*
	  $.getJSON('../../castmember/update.json', 
			    { 
				  'ifRead' : 1,
				  'mno' : mno,
		  		  'mvNo' : mvNo,
		  		  'fpCode' : fpCode
			    }, function(result) { 
			    	console.log(mno + " : " + mvNo + " : " + fpCode)
			    	console.log('update success!!') })*/
  }