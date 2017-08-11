var body = document.querySelector('body')

$('#tags').autocomplete({
  source: function(request, response) {
    $.ajax('http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=b0cac97aa508433ca9835e54ab51d7cd&itemPerPage=1000', {
      contentType: "application/json; charset=utf-8",
      data : { input : request.term },
      dataType: 'json',
      success: function(getMoviePersons) {
                console.log('11');
                var list = $.map(getMoviePersons.peopleListResult.peopleList, function(item) {
                          return {
                            id: item.peopleCd,
                            label: item.peopleNm + ' (' + item.filmoNames.split('|')[0] + ')',
                            value: item.peopleNm + ' (' + item.peopleCd + ')'
                          }
                })
                response($.ui.autocomplete.filter(list, request.term)) // response
      } // success
    }) // ajax
  } // source
  , autoFocus: true,
})

$.ui.autocomplete.filter = function (array, term) {
        var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(term), "i");
        return $.grep(array, function (value) {
            return matcher.test(value.label || value.value || value);
        });
    };
