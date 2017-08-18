var body = document.querySelector('body')
$('.hidden-info')
$('#tags').keydown(function(e){ 
	setTimeout(() => {
		if($('#tags').val() != '') {
    $.ajax('http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=b0cac97aa508433ca9835e54ab51d7cd&itemPerPage=100', {
      contentType: "application/json; charset=utf-8",
      data : { 'keyword' : $('#tags').val()},
      dataType: 'json',
      success: function(getMoviePersons) {
    	  console.log(getMoviePersons.peopleListResult)
    	  $('#moviePersonList').html('')
    	  let templateFn = Handlebars.compile($('#fileupload-mpinfo-template').text())
  		  let generatedHTML = templateFn(getMoviePersons.peopleListResult) 
  		  $('#moviePersonList').append(generatedHTML)
  		
      } // success
    }) // ajax 
    }
  }, 150); // source
})

$.ui.autocomplete.filter = function (array, term) {
        var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(term), "i");
        return $.grep(array, function (value) {
            return matcher.test(value.label || value.value || value);
        });
    };
