
var chromeUpload = document.getElementById("chrome-upload")
  chromeUpload.addEventListener("change", handleFiles, false);

var imagesDiv = document.getElementById('images-div')

function handleFiles() {
  var files = this.files;

  if (files.length) {
      imagesDiv.innerHTML = "";

      var img = document.createElement("img");
      img.src = window.URL.createObjectURL(files[0]);
      img.classList.add("obj");
      img.file = files[0]
      img.height = 150;
      img.onload = function() {
        window.URL.revokeObjectURL(this.src);
        /*
           1. createObjectURL()을 통해서 filse[0]의 data url 정보를 생성.
           2.그 정보를 img 객체의 src에다가 저장.
           3. revokeObjectURL() 함수를 통해 load 된 url정보를 revoke(취소, 해제) 시킨다.
        */

      }
      $('.img-bar').css('margin-bottom', '65px')
      imagesDiv.appendChild(img);
  }
}

var movieCodeArr = [],
    movieCodeList = [],
    movieNoArr = [],
	  castLength,
    checkFpCode = [];

$('#upload-btn').click(function(e) {
    if (personTags.val().length > 12) {
      $.getJSON('http://192.168.0.69:8080/filmperson/list.json', function(result) {
        let list = result.data.list

        for (var i = 0; i < list.length; i++) {
          checkFpCode.push(list[i].fpCode)
        }

        if (jQuery.inArray(peopleCd, checkFpCode) == -1) {
          $.post('http://192.168.0.69:8080/filmperson/add.json', {
            'fpCode': peopleCd,
            'fpName': peopleNm
          }, function(result) {
          }, 'json')
        }
      })


        $.ajax('http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleInfo.json?' +
    				   'key=b0cac97aa508433ca9835e54ab51d7cd&peopleCd=' + peopleCd, {
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
                							        	        movieName = getMovieInfo.movieNm,
                							        	        movieCode = getMovieInfo.movieCd

                								            var openDay = openDate.substring(0,4) + '년 ' +
                								            		          openDate.substring(4,6) + '월 ' +
            			            		                        openDate.substring(6,8) + '일'

                        										    movieCodeArr.push(movieCode)
                        										    movieCodeArr.push(movieName)
                        										    movieCodeArr.push(openDay)


    	  	                                } // success
        								  }) // ajax
        			  	} // success
        			  }) // ajax

            // take data from movie table and compare the data what if one exists
        	  $.getJSON('http://192.168.0.69:8080/movie/list.json', function(result) {

                if (movieCodeArr[1] != undefined && movieCodeArr[2] != undefined) {
                  engine()
                }

                var movieList = result.data.list
                for (var k = 0; k < movieList.length; k++) {
                    movieCodeList.push(movieList[k].mvNo)
                }

            		if (movieList.length < 1) {
            			$.post('http://192.168.0.69:8080/movie/add.json', {
          				  'mvNo': movieCodeArr[0],
          				  'mvTitle': movieCodeArr[1],
          				  'mvDay': movieCodeArr[2]
          			  }, function(result) { }, 'json')
            		} else if (jQuery.inArray(movieCodeArr[0], movieCodeList) == -1) {
        	  			if (jQuery.inArray(movieCodeArr[0], movieCodeList) == -1) {
        	  				$.post('http://192.168.0.69:8080/movie/add.json', {
        	  				  'mvNo': movieCodeArr[0] ,
        	  				  'mvTitle': movieCodeArr[1],
        	  				  'mvDay': movieCodeArr[2]
                    }, function(result) {
                    }, 'json')
        	  			} // 개봉영화 db에 저장. 단, 테이블에 중복된 데이터가 없는 경우에.
      		      }


        				$.post('http://192.168.0.69:8080/castmember/add.json', {
        					'mvNo': movieCodeArr[0],
        					'fpCode': peopleCd,
        					'mno': $('#chrome-hidden-mno').val(),
        					'ifRead': false
        				}, function(result){
                  window.close()
                }, 'json')
        	  }) // /movie/list.json 에서 데이터를 가져와 movie와 cast_member 테이블에 insert 하는 구문


    } else {
      e.preventDefault()
      alert('이름을 정확히 입력해주세요!')
    }
  })

$('#close-btn').click(function() {
  window.close()
})


function engine() {
  var message = peopleNm + ' 님이 참여한 <' + movieCodeArr[1] + '> 영화가 \n' + movieCodeArr[2] + '에 개봉합니다!'
  var options = {
    type : 'basic',
    title : '영화인 개봉 알림!',
    message : message,
    iconUrl : '../images/logo.png'
  }

  chrome.notifications.create(options, callback)
}


function callback() {
  console.log('done')
}
