var movieCodeArr = [],
    movieCodeList = [],
    movieNoArr = [],
	moviePersonCodes = [],
	castLength;

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
			            	moviePersonName = list[i].mpNickname,
			            	moviePersonCode = list[i].mpCode
			            	console.log(moviePersonCode + " : " + attendMovieCode)
			            	
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
										    
										    movieCodeArr.push(movieCode)
										    movieCodeArr.push(movieName)
										    movieCodeArr.push(openDay)
										    moviePersonCodes.push(list[i].mpCode)
								  	} // success
								  }) // ajax 
			  	} // success
			  }) // ajax 
	 } // for
	  
	  if (list.length > 0) {
	  // take data from movie table and compare the data what if one exists
  	  $.getJSON('/movie/list.json', function(result) {
  		var movieList = result.data.list 
  		
  		if (movieList.length < 1) {
  			$.post('/movie/add.json', {
				  'mvNo': movieCodeArr[0],
				  'mvTitle': movieCodeArr[1],
				  'mvDay': movieCodeArr[2]
			  }, function(result) {console.log('bb')}, 'json')	
  		} else {
  			for (var k = 0; k < movieList.length; k++) {
  	  			movieCodeList.push(movieList[k].mvNo)
  	  		}
  			
  			for (var j = 0; j < movieCodeArr.length / 3; j++) {
  	  			if (jQuery.inArray(movieCodeArr[3 * j], movieCodeList) == -1) {
  	  				$.post('/movie/add.json', {
  	  				  'mvNo': movieCodeArr[3 * j] , 
  	  				  'mvTitle': movieCodeArr[3 * j + 1],
  	  				  'mvDay': movieCodeArr[3 * j + 2]
  	  			    }, function(result) {console.log('movie add success!!')}, 'json')
  	  			} // 개봉영화 db에 저장. 단, 테이블에 중복된 데이터가 없는 경우에.
  	  		} // for 
		}
  		
		for (var z = 0; z < movieCodeArr.length / 3; z++) {
			  console.log('aa')
			  	  $.post('/castmember/add.json', {
			         	 'mvNo': movieCodeArr[3 * z],
			    	     'fpCode': moviePersonCodes[z],
			    	     'mno': 1,
			    	     'ifRead': false
			  	  }, function(result){'castMember add success!'}, 'json') 
  	    } // 출연진 db에 저장. 단, 테이블에 영화 code와 출연진 code가 모두 같지 않을 때.
  	  }) // /movie/list.json 에서 데이터를 가져와 movie와 cast_member 테이블에 insert 하는 구문

	  }  
  })


  
  
