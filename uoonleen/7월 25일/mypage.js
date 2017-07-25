var mpList = $('#mp-array')

/*
 * $(document.body).on('click', '.detail-link', function(event) {
  location.href = 'view.html?no=' + $(this).attr('data-no') 
  event.preventDefault()
})
*/
  $.getJSON('http://localhost:8080/fanduck/movieperson/list.json', function(result) {
    var templateFn = Handlebars.compile($('#mp-template').text())
	var generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
//	mpList.text('') // tbody의 기존 tr 태그들을 지우고
	
	mpList.html(generatedHTML) // 새 tr 태그들로 설정한다.
  }) // getJSON()
