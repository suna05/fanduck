var mpList = $('#mp-array')

  $.getJSON('../../movieperson/list.json', function(result) {
    var templateFn = Handlebars.compile($('#mp-template').text())
	var generatedHTML = templateFn(result.data) 
	
	mpList.html(generatedHTML)
  })
  
  $.getJSON('../../castmember/list.json', function(result) {
    var templateFn = Handlebars.compile($('#alarm-template').text())
	var generatedHTML = templateFn(result.data) 
	
	mpList.html(generatedHTML)
  })

