var uploadBtn = document.getElementById('upload-btn')
var body = document.querySelector('body')
var personTags = $('#person-tags'),
    hiddenInfo = $('#chrome-hidden-info'),
    mno, repRoleNm, peopleCd, peopleNm, filmoNames;
var no

$.getJSON('http://192.168.0.69:8080/auth/userinfo.json', function(result) {
   if (result.data) {
       mno = result.data.mno
       $('#chrome-hidden-mno').val(mno)
   }
})



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
                  personTags.val('').removeAttr('readonly')
                  $('div').remove('.person-array')
                })

                var list = $.map(getMoviePersons.peopleListResult.peopleList, function(item) {

                  if (item.peopleNm == personTags.val()) {
                    personTags.val('')
                    personTags.val(item.peopleNm + ' (' + item.peopleCd + ') ').attr('readonly', 'true')

                    $('<div>').text(item.peopleNm + ' (' + item.filmoNames.split('|')[0] + ')')
                    .addClass('person-array').css('width', '185px').css('margin-left', '16px').appendTo($('.person-list'))

                    $('.person-array').click(function() {
                      personTags.val(item.peopleNm + ' (' + item.peopleCd + ') ')
                      $('div').remove('.person-array')
                    })

                    hiddenInfo.val(item.repRoleNm + '-' + item.filmoNames + '--' + item.peopleCd)

                    repRoleNm = item.repRoleNm
                    peopleNm = item.peopleNm
                    peopleCd = item.peopleCd
                    filmoNames = item.filmoNames
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
