var moviepeople = []

$(function() {
  //  setInterval(getRecentInfo, 1000)
})

function getRecentInfo() {
  console.log('체크체크')
  $.get('http://localhost:8080/auth/userinfo.json', function(result) {
    console.log(result)
    console.log(result.data)
     if (result.data) {
         mno = result.data.mno
         console.log('aaaa')
     }
  })
  console.log(mno)
}

// $(function() {
//   setInterval(getRecentInfo, 1000)
// })
//
// function getRecentInfo() {

// }
// }
//
// $.get('http://localhost:8080/movieperson/list.json', { 'mno' : mno }, function(result) {
//   var list = result.data.list
//   for (var i = 0; i < list.length; i++) {
//     movieperson.push(list[i])
//   }
//
//   for (var j = 0 ; j < list.length; i++) {
//     $.ajax('http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleInfo.json?' +
//            'key=b0cac97aa508433ca9835e54ab51d7cd&peopleCd=' + moviepeople[j], {
//             contentType: "application/json; charset=utf-8",
//             dataType: 'json',
//             async: false,
//             success: function(getPersonDetail) {
//                       var getDetailInfo = getPersonDetail.peopleInfoResult.peopleInfo
//                       var attendMovieCode = getDetailInfo.filmos[0].movieCd
//
//                       $.get('http://localhost:8080/castmember/list.json', { mno : mno })
//                     }
//             })
//   }
//
// })
