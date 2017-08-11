var body = document.querySelector('body')

listCheck('aa')

$('#person-tags').autocomplete({
  delay: 0,
  minLength: 0,
  source: function(request, response) {
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
      if (xhr.readyState < 4) {
    	  return
      }
      var getMoviePersons = JSON.parse(xhr.responseText)
      
      console.log('access success!')
      
      var list = $.map(getMoviePersons.peopleListResult.peopleList, function(item) {
	    listCheck(list)
     	return {
	             id: item.repRoleNm + '-' + item.filmoNames + '-' + item.peopleCd,
	             value: item.peopleNm + ' (' + item.peopleCd + ')',
	             label: item.peopleNm + ' (' + item.filmoNames.split('|')[0] + ')'
               }
         })
      
      $('<p>').text(list).appendTo(body)
      response($.ui.autocomplete.filter(list, request.term)) // response
      
      
    }

    xhr.open('get', 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=b0cac97aa508433ca9835e54ab51d7cd&itemPerPage=500', true)
    xhr.send()
  }, // source
  autoFocus: true,
  select: function (event, ui) {
	  console.log('ui.item.id : ' + ui.item.id)
	  var hiddenInfo = ui.item.id

      $('.chrome-hidden-info').val(hiddenInfo)
      console.log($('.chrome-hidden-info').val())
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
}

