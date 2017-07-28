var body = document.querySelector('body')
$('.hidden-info')
$('#tags').autocomplete({
  source: function(request, response) {
    $.ajax('http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=b0cac97aa508433ca9835e54ab51d7cd&itemPerPage=2000', {
      contentType: "application/json; charset=utf-8",
      data : { input : request.term },
      dataType: 'json',
      success: function(getMoviePersons) {
    	  console.log(request.term)
                console.log('11');
                var list = $.map(getMoviePersons.peopleListResult.peopleList, function(item) {
                	return {
                        id: item.repRoleNm + '-' + item.filmoNames + '-' + item.peopleCd,
                        label: item.peopleNm + ' (' + item.filmoNames.split('|')[0] + ')',
                        value: item.peopleNm + ' (' + item.peopleCd + ')'
                      }
                })
                response($.ui.autocomplete.filter(list, request.term)) // response
      } // success
    }) // ajax
  }, // source
  autoFocus: true,
  select: function (event, ui) {
	  console.log('ui.item.id : ' + ui.item.id)
	  var hiddenInfo = ui.item.id
	  
      $('.hidden-info').val(hiddenInfo)
      console.log($('.hidden-info').val())
      // update what is displayed in the textbox
      this.value = ui.item.value; 
      return false;
  }
})

$.ui.autocomplete.filter = function (array, term) {
        var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(term), "i");
        return $.grep(array, function (value) {
            return matcher.test(value.label || value.value || value);
        });
    };
