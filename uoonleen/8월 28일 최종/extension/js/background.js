var moviepeople = [],
    castPeople = [],
    castMovieNumber = [],
    movieCodeArr = [],
    films = []
var mno, peopleNm, peopleCd
var alarmCount = 0
$(function() {
  setInterval(getRecentInfo, 10000)
})

function getRecentInfo() {
  console.log(mno)
    $.getJSON('http://localhost:8080/auth/userinfo.json', function(result) {
       if (result.data) {
           mno = result.data.mno

           $.get('http://localhost:8080/movieperson/list.json', { 'mno' : mno }, function(result) {
             var list = result.data.list
             for (var i = 0; i < list.length; i++) {
               moviepeople.push(list[i])
             }

             for (var j = 0 ; j < list.length; j++) {
               $.ajax('http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleInfo.json?' +
                      'key=b0cac97aa508433ca9835e54ab51d7cd&peopleCd=' + moviepeople[j].mpCode, {
                       contentType: "application/json; charset=utf-8",
                       dataType: 'json',
                       async: false,
                       success: function(getPersonDetail) {
                                 var getDetailInfo = getPersonDetail.peopleInfoResult.peopleInfo
                                 var attendMovieCode = getDetailInfo.filmos[0].movieCd

                                 $.get('http://localhost:8080/castmember/listone.json',
                                  {
                                   'mno' : mno,
                                   'fpCode' : moviepeople[j].mpCode
                                   }, function(result) {
                                       let selectCast = result.data.list

                                       if (attendMovieCode == selectCast[0].mvNo) {
                                         console.log('not updated..')
                                       } else {
                                         alarmCount++
                                         peopleNm = getDetailInfo.peopleNm
                                         peopleCd = getDetailInfo.peopleCd

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

                                                           $.get('http://localhost:8080/movie/list.json', function(result) {
                                                             let movies = result.data.list
                                                             for (var i = 0; i < movies.length; i++) {
                                                               films.push(movies[i].mvNo)
                                                             }

                                                             if (jQuery.inArray(movieCodeArr[0], films) == -1) {
                                                               $.post('http://localhost:8080/movie/add.json',
                                                               {
                                                                 mvNo : movieCodeArr[0],
                                                                 mvTitle : movieCodeArr[1],
                                                                 mvDay : movieCodeArr[2]
                                                               }, function(result) {})
                                                             }
                                                           })
                                                           $.post('http://localhost:8080/castmember/updatemovie.json',
                                                           {
                                                             mvNo : movieCodeArr[0],
                                                             mno : mno,
                                                             fpCode : peopleCd
                                                           }, function(result) {
                                                             console.log(movieCodeArr[0] + " : " + mno + " : " + moviepeople[j].mpCode);
                                                             console.log('castmember updatemovie')})
                                                            engine()
                                                 } // success
                                         }) // ajax
                                       }
                                 }) // castmember list one
                               } // success
                       }) // searchPeopleInfo.json
             } // for
           }) // movieperson.json
       } // if
    }) // getJSON user info : mno
} // getRecentInfo()


function engine() {
  var message = peopleNm + ' 님이 참여한 <' + movieCodeArr[1] + '> 영화가 \n' + movieCodeArr[2] + '에 개봉합니다!'
  var options = {
    type : 'basic',
    title : '영화인 개봉 알림!',
    message : message,
    iconUrl : '../images/logo.png'
  }

  chrome.notifications.create(options)
}

var selectedContent = null;
chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    console.info("------------------------------- Got request", request);
    if (request.getSelectedContent) {
      sendResponse(selectedContent);
    }
  });
