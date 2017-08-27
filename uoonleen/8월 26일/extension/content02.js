var uploadBtn = document.getElementById('upload-btn')
var body = document.querySelector('body')
var personTags = $('#person-tags'),
    hiddenInfo = $('#chrome-hidden-info'),
    repRoleNm, peopleCd, peopleNm, filmoNames;

var countResult = 0

personTags.keydown(function(event) {
  if (event.which == 8) {
    personTags.val('')
    $('div').remove('.person-array')
  }
})

personTags.autocomplete({
  delay: 150,
  minLength: 1,
  autoFocus:true,
  source: function(request, response) {

    $.ajax('http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=b0cac97aa508433ca9835e54ab51d7cd&itemPerPage=2000', {
      contentType: "application/json; charset=utf-8",
      data : { input : request.term },
      dataType: 'json',
      success: function(getMoviePersons) {
                $('div').remove('.person-array')

                $('#remove-btn').click(function(){
                  personTags.val('').removeAttr('readonly')
                  $('div').remove('.person-array')
                })

                var list = $.map(getMoviePersons.peopleListResult.peopleList, function(item) {

                  if (item.peopleNm.includes(request.term)) {
                    printPerson(item)
                  }

                    repRoleNm = item.repRoleNm
                    peopleNm = item.peopleNm
                    peopleCd = item.peopleCd
                    filmoNames = item.filmoNames
                  // }
                })

      } // success
    }) // ajax
  } // source

})


function printPerson(item) {
    $('<div>').text(item.peopleNm + ' (' + item.filmoNames.split('|')[0] + ')')
    .addClass('person-array').css('width', '185px').css('margin-left', '16px').appendTo($('.person-list'))

    $('.person-array').click(function() {
      console.log(this)
      $('div').remove('.person-array')
    })

    hiddenInfo.val(item.repRoleNm + '-' + item.filmoNames + '--' + item.peopleCd)

    repRoleNm = item.repRoleNm
    peopleNm = item.peopleNm
    peopleCd = item.peopleCd
    filmoNames = item.filmoNames
}
