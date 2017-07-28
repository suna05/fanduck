var body = document.querySelector('body')
$.ajax('http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleInfo.json?key=b0cac97aa508433ca9835e54ab51d7cd&peopleCd=20164556', {
  contentType: "application/json; charset=utf-8",
  data : { input : request.term },
  dataType: 'json',
  success: function(getMoviePersons) {
	  console.log(request.term)
            console.log('11');
            var list = $.map(getMoviePersons.peopleListResult.peopleList, function(item) {
            	return {
                    id: item.repRoleNm + '-' + item.filmoNames,
                    label: item.peopleNm + ' (' + item.filmoNames.split('|')[0] + ')',
                    value: item.peopleNm + ' (' + item.peopleCd + ')'
                  }
            })
            response() // response
  	} // success
  }) // ajax

