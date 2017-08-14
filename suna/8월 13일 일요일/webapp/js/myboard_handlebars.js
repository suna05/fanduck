var tbody = $('#board-ex'),
		tbodyy = $('#board-exx'),
		searchValue = $('#value');

var mpNo = 0

try {
	mpNo = location.href.split('?')[1].split('=')[1]
} catch (err) {}



$(document.body).on('click', '.detail-link', function(event) {
	location.href='board.html?no=' + $(this).attr('data-no')
	event.preventDefault()
})



var bdNo = 0

try {
	bdNo = location.href.split('?')[1].split('=')[1]
} catch (err) {}

$(document.body).on('click', '.detail-link', function(event) {
	location.href='view.html?bdNo=' + $(this).attr('data-no')
	event.preventDefault()
})





function displayList() {
  // 서버에서 강사 목록 데이터를 받아 온다.
	console.log(mpNo)
  $.getJSON('/board/list.json',{'mpNo':mpNo}, function(result) {
  console.log(result)
  
  var data = result.data
  console.log("data=>", data.photoList)
  
	var totalCount = result.data.totalCount;
  // 템플릿 소스를 가지고 템플릿을 처리할 함수를 얻는다.
  var templateFn = Handlebars.compile($('#board-template').text())
  var generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.

  tbody.text('') // tbody의 기존 tr 태그들을 지우고
  tbody.html(generatedHTML) // 새 tr 태그들로 설정한다.


  }) // getJSON()
} // displayList()



$('#btn-search').click(function() {
	console.log("검색버튼 눌렀네")
	
	
	displayList2()
	console.log(searchValue.val())
})

function displayList2() {
$.getJSON('/board/searchList.json', {
		'value' : '%' + searchValue.val() + '%'
	}, function(result) {
		console.log(result)
		tbody.text('')
		var totalCount = result.data.totalCount;

  // 템플릿 소스를 가지고 템플릿을 처리할 함수를 얻는다.
  var templateFn = Handlebars.compile($('#board-template').text())
  var generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.

  tbodyy.text('') // tbody의 기존 tr 태그들을 지우고
  tbodyy.html(generatedHTML) // 새 tr 태그들로 설정한다.
  
  
	})
}
displayList(1)

