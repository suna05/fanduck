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
  	  			}
  	  		} // for 
  		} 
  	  }) // movieControl add() 
  	  
  	   $.getJSON('../../castmember/list.json', function(result) {
  		  castLength = result.data.list.length  		  
  		  for (var x = 0; x < castLength; x++) {
	  	  	  $.getJSON('../../castmember/select.json', {
	  	  		  'mvNo': movieCodeArr[3 * x],
	  	  		  'fpCode': moviePersonCodes[x]
	  	  	  }, function(result2) {
	  	  		  var castList = result2.data.select
	  	  		  console.log('bbbbbbbbb')
  	  			  console.log(castList.mvNo + " : " + movieCodeArr[3 * (count++)])
  	  			  
	  	  		  /*
	  	  		  if ((castList.mvNo != movieCodeArr[3 * (count)]) && (castList.fpCode != moviePersonCodes[count])) {
	  	  			$.post('/castmember/add.json', {
  				    	   'mvNo': movieCodeArr[3 * (count)],
  		  		    	   'fpCode': moviePersonCodes[count]
	  	  			}, function(result){'castMember add success!'}, 'json') // 출연진 db에 저장
	  	  		  } */

	  	  		})
  		 }
  	   }, 'json')
  	  
  	   
  	  
  })
    
  