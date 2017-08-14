var mpList = $('#mp-array'),
    calendarAlarm = $('#calendar_data'),
    alarmTemplateFn,
    alarmGeneratedHTML
    
    

  // 영화인 목록 JSON 요청
  function moviePersonPrint(mno) {
	  $.getJSON('../../movieperson/list.json', {'mno':mno}, function(result) {
	    var templateFn = Handlebars.compile($('#mp-template').text())
		var generatedHTML = templateFn(result.data) 
		
		mpList.html(generatedHTML)
	  })
	  
	  Handlebars.registerHelper('readYN', function(ifRead, options) {
  	  if(ifRead == false) {
  		  Handlebars.registerHelper('openDate', function(mvDay, options) {
  		    if ($('.head_cal').text().length - 1 < 2) { 
  			  if((mvDay.substring(7, 8) == $('.head_cal').text().substring(0,1)) 
  				  && mvDay.substring(2, 4) == $('.cal_year').text().substring(2, 4)) {
  			    return options.fn(this);
  			  }
  			  return options.inverse(this);
  		  	} else {
  		  		if((mvDay.substring(6, 8) == $('.head_cal').text().substring(0,2)) 
  					&& mvDay.substring(2, 4) == $('.cal_year').text().substring(2, 4)) {
  				    return options.fn(this);
  				}
  			  return options.inverse(this);		
  		  	}
  		  });  
  	    return options.fn(this);
  	  }
  	  return options.inverse(this);
    });  
	 
	  // 출연진 목록 JSON 요청 (알람)
	  $.getJSON('../../castmember/list.json', {'mno':mno, 'mpNo':1}, function(result) {
		  var movieDay = result.data.list,
		  	  getMovieDay = []
	  	
	  	  alarmTemplateFn = Handlebars.compile($('#alarm-template').text())
	      alarmGeneratedHTML = alarmTemplateFn(result.data) 
	      alarmTmp = $('#alarm-template').text()
	      calendarAlarm.html(alarmGeneratedHTML)
		  
		  for (var i = 0; i < movieDay.length; i++) {
			  getMovieDay.push(parseInt(movieDay[i].mvDay.split('월')[1].substring(1,3)))
		  }
		  
		  // 현재 달이 영화의 개봉 달과 일치할 때 이벤트 발생
		  for (var j = 0; j < getMovieDay.length; j++ ) {
			  
		      if(parseInt(movieDay[j].mvDay.split('년')[1].substring(1,3)) == $('.head_cal').text().split('월')[0]
		         && movieDay[j].mvDay.split('년')[0].substring(0,4) == $('.cal_year').text()) {
				  $('.' + getMovieDay[j]).css('background-color', 'darkseagreen').css('color', 'white');
		      }
		  }
	  })
	  
	  
	  
	  // 이월 시에 알람 리로드
	  $(document).on('click', '.moveBtn', function() {
		  
		$.getJSON('../../castmember/list.json', {'mno':mno}, function(result) {
			var castMemberList2 = result.data.list
			var alarmGeneratedHTML2 = alarmTemplateFn(result.data) 
			var movieDay = result.data.list,
			    getMovieDay = []
			
			calendarAlarm.html(alarmGeneratedHTML2)
			
			for (var i = 0; i < movieDay.length; i++) {
				getMovieDay.push(parseInt(movieDay[i].mvDay.split('월')[1].substring(1,3)))
			}
			  
			// 현재 달이 영화의 개봉 달과 일치할 때 이벤트 발생
			for (var j = 0; j < getMovieDay.length; j++ ) {
			    if(parseInt(movieDay[j].mvDay.split('년')[1].substring(1,3)) == $('.head_cal').text().split('월')[0]
			       && movieDay[j].mvDay.split('년')[0].substring(0,4) == $('.cal_year').text()) {
				 $('.' + getMovieDay[j]).css('background-color', 'darkseagreen').css('color', 'white');
			    }
			}
		})
	  })
  }


  var no = 0
	try {
	  no = location.href.split('?')[1].split('=')[1]
	} catch (err) {}

  $(document.body).on('click', '.detail-link', function(event) {
	  location.href = '../board/board.html?no=' + $(this).attr('data-no') 
	  event.preventDefault()
  })
  
  
  
  
