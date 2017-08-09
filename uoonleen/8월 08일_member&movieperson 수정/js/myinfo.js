var introBox = $('.my-intro');

function detailMember(mno) {
	$.getJSON('../member/detail.json', {'mno': mno }, function(result) {
	console.log('detailMember()가 detail.json으로 받아온 정보 중에 세션으로 받은 mno : ' + mno)
	console.log(result.data)
		// 템플릿 소스를 가지고 템플릿을 처리할 함수를 얻는다.
	var templateFn = Handlebars.compile($('#intro-template').text())
    var generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
     introBox.text('') //tbody의 기존 tr 태그들을 지우고
     introBox.html(generatedHTML) // 새 tr 태그들로 설정한다.		   
	}) // getJSON()
	
}//detailMember()


