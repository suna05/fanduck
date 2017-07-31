$.getJSON('/movieperson/list.json', function(result) {
	  var list = result.data.list
	  var count = 0;
	  for (var i = 0; i < list.length; i++) {
		  $.ajax('http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleInfo.json?' +
				 'key=b0cac97aa508433ca9835e54ab51d7cd&peopleCd=' + list[i].mpCode, {
			  contentType: "application/json; charset=utf-8",
			  dataType: 'json',
			  async: false,
			  success: function(getPersonDetail) {
			            var getDetailInfo = getPersonDetail.peopleInfoResult.peopleInfo
			            var attendMovieCode = getDetailInfo.filmos[0].movieCd
			            
			            $.ajax('http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?' +
				 				'key=b0cac97aa508433ca9835e54ab51d7cd&movieCd=' + attendMovieCode, {
			  					contentType: "application/json; charset=utf-8",
			 					dataType: 'json',
			 					async: false,
							  	success: function(getMovieDetail) {
							    	        var getMovieInfo = getMovieDetail.movieInfoResult.movieInfo,
							        	    	openDate = getMovieInfo.openDt,
							        	        movieName = getMovieInfo.movieNm
												
									            var openDay = openDate.substring(0,4) + '년 ' + 
									            		      openDate.substring(4,6) + '월 ' +
									            		      openDate.substring(6,8) + '일'
									            	console.log('-----')
												    moviePersonName = list[count++].mpNickname
												    console.log(moviePersonName)
												    
												    /*
									            	var alarmTemplate = '<div style="padding:5px;">[개봉] ' + moviePersonName + ' 님이 참여한 영화 ' + 
									            						movieName + '가(이) ' + openDay + '에 개봉합니다!</div>'; 
									                console.log(alarmTemplate)
									                console.log()
									                document.querySelector('#calendar_data').innerHTML += alarmTemplate*/
								  	} // success
								  }) // ajax 
			  	} // success
			  }) // ajax 
	 }
  })
