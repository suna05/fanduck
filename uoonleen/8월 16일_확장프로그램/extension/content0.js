var uploadBtn = document.getElementById('upload-btn')
var body = document.querySelector('body')
var req;

$('#person-tags').autocomplete({
  delay: 0,
  minLength: 1,
  autoFocus:true,
  source: function(request, response) {
    req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      if(req.readyState < 4) {
        return
      }
      var getMoviePersons = JSON.parse(req.responseText)
      alert("성공 : ")

      var list = $.map(getMoviePersons.peopleListResult.peopleList, function(item) {
      return {
               id: item.repRoleNm + '-' + item.filmoNames + '-' + item.peopleCd,
               value: item.peopleNm + ' (' + item.peopleCd + ')',
               label: item.peopleNm + ' (' + item.filmoNames.split('|')[0] + ')'
               }
         })

      $('<p>').text(list).appendTo(body)
      response($.ui.autocomplete.filter(list, request.term)) // response
    };
    req.open('GET', 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=b0cac97aa508433ca9835e54ab51d7cd&itemPerPage=500', true);
    req.setRequestHeader("content-Type", "application/json;charset=utf-8")
    req.send()
  },
  select: function (event, ui) {
    var hiddenInfo = ui.item.id
    $('.chrome-hidden-info').val(hiddenInfo)
      // update what is displayed in the textbox
    this.value = ui.item.value;

    return false;
  }
})

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('upload-btn').addEventListener('click', alertBtn)
})

function alertBtn() {
  openURL()
  // alert($('#person-tags').val())
}

$.ui.autocomplete.filter = function (array, term) {
        var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(term), "i");
        return $.grep(array, function (value) {
            return matcher.test(value.label || value.value || value);
        });
}


// function openURL() {
//   req = new XMLHttpRequest();
//   req.onreadystatechange = handleStateChange;
//   req.open('GET', 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=b0cac97aa508433ca9835e54ab51d7cd&itemPerPage=500', true);
//   req.setRequestHeader("content-Type", "application/json;charset=utf-8")
//   req.send()
// }
