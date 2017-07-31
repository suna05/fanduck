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
			            var attendMovieCode = getDetailInfo.filmos[0].movieCd,
			            	moviePersonName = list[count].mpNickname,
			            	moviePersonCode = list[count++].mpCode
			   
			            $.ajax('http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?' +
				 				'key=b0cac97aa508433ca9835e54ab51d7cd&movieCd=' + attendMovieCode, {
			  					contentType: "application/json; charset=utf-8",
			 					dataType: 'json',
			 					async: false,
							  	success: function(getMovieDetail) {
							    	        var getMovieInfo = getMovieDetail.movieInfoResult.movieInfo,
							        	    	openDate = getMovieInfo.openDt,
							        	        movieName = getMovieInfo.movieNm,
							        	        movieCode = getMovieInfo.movieCd
							        	        
								            var openDay = openDate.substring(0,4) + '년 ' + 
								            		      openDate.substring(4,6) + '월 ' +
								            		      openDate.substring(6,8) + '일'
								            	console.log('-------------------')
											    console.log(moviePersonName)
										    var movieCodeArr = []
											    
										  $.getJSON('/movie/list.json', function(result) {
											var list2 = result.data.list 
											for (var j = 0; j < list2.length; j++)
												movieCodeArr.push(list[j].mpCode)
											  
										  	})
										  	
										  if(jQuery.inArray(movieCode, movieCodeArr) != -1) {
											  $.post('/movie/add.json', {
												  'mvNo': movieCode,
												  'mvTitle': movieName,
												  'mvDay': openDay
											  }, function(result) {}, 'json')	    
										  }
											  
								  	} // success
								  }) // ajax 
			  	} // success
			  }) // ajax 
	 }
  })
