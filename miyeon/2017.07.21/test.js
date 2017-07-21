var tbody = $('#teacher-tbl > tbody');



function displayList(pageNo) {
  // 서버에서 강사 목록 데이터를 받아 온다.
  $.getJSON('../member/list.json', function(result) {
  console.log(result)
  var totalCount = result.data.totalCount;
  
  
    // 템플릿 소스를 가지고 템플릿을 처리할 함수를 얻는다.
    var templateFn = Handlebars.compile($('#tbody-template').text())
    var generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
    tbody.text('') // tbody의 기존 tr 태그들을 지우고
    tbody.html(generatedHTML) // 새 tr 태그들로 설정한다.


  }) // getJSON()
} // displayList()




displayList(1)