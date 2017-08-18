var introBox = $('.my-intro');

function detailMember(mno) {
	$.getJSON('../member/detail.json', {'mno': mno }, function(result) {
	console.log('detailMember()가 detail.json으로 받아온 정보 중에 세션으로 받은 mno : ' + mno)
	console.log(result.data)
	var templateFn = Handlebars.compile($('#intro-template').text())
    var generatedHTML = templateFn(result.data)
     introBox.text('')
     introBox.html(generatedHTML) 	   
	}) // getJSON()
	
}//detailMember()


