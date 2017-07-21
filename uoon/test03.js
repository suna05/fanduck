var body = document.querySelector('body')

$('#tags').autocomplete({
  source: function(request, response) {
    $.ajax('http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=b0cac97aa508433ca9835e54ab51d7cd&itemPerPage=1000', {
      contentType: "application/json; charset=utf-8",
      data : { input : request.term },
      dataType: 'json',
      success: function(getMoviePersons) {
        console.log('11');

        response($.map(getMoviePersons.peopleListResult.peopleList, function(item) {
                  return {
                    id: item.peopleCd,
                    label: item.peopleNm,
                    value: item.peopleNm + '(' + item.peopleCd + ')'
                  }
        })) // response
      } // success
    }) // ajax
  } // source

}) // autocomplete
