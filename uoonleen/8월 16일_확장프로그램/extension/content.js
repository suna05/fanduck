var uploadBtn = document.getElementById('upload-btn')
var body = document.querySelector('body')
var personTags = $('#person-tags'),
    hiddenInfo = $('.chrome-hidden-info')

personTags.keydown(function(event) {
  if (event.which == 8) {
    personTags.val('')
  }
})

$('#person-tags').autocomplete({
  delay: 0,
  minLength: 1,
  autoFocus:true,
  source: function(request, response) {
    $.ajax('http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=b0cac97aa508433ca9835e54ab51d7cd&itemPerPage=500', {
      contentType: "application/json; charset=utf-8",
      data : { input : request.term },
      dataType: 'json',
      success: function(getMoviePersons) {

                $('#remove-btn').click(function(){
                  personTags.val('').removeAttr('disabled')
                  $('div').remove('.person-array')
                })

                var list = $.map(getMoviePersons.peopleListResult.peopleList, function(item) {

                  if (item.peopleNm == personTags.val()) {
                    personTags.val('')
                    personTags.val(item.peopleNm + ' (' + item.peopleCd + ') ').prop('disabled', 'true')

                    $('<div>').text(item.peopleNm + ' (' + item.filmoNames.split('|')[0] + ')')
                    .addClass('person-array').css('width', '200px').css('margin-left', '16px').appendTo($('.person-list'))

                    $('.person-array').click(function() {
                      personTags.val(item.peopleNm + ' (' + item.peopleCd + ') ')
                      $('div').remove('.person-array')
                    })

                    $('.chrome-hidden-info').val(item.repRoleNm + '-' + item.filmoNames + '-' + item.peopleCd)
                  }

                	// return {
                  //       id: item.repRoleNm + '-' + item.filmoNames + '-' + item.peopleCd,
                  //       value: item.peopleNm + ' (' + item.peopleCd + ')',
                  //       label: item.peopleNm + ' (' + item.filmoNames.split('|')[0] + ')'
                  //     }
                })
      } // success
    }) // ajax
  } // source

})

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('upload-btn').addEventListener('click', alertBtn)
})



function alertBtn() {
  insertMoviePerson(personTags, hiddenInfo)
  // alert(personTags.val())
}

function insertMoviePerson(personTags, hiddenInfo) {
}
