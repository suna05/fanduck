var mno
var count = 0
$.getJSON('http://localhost:8080/auth/userinfo.json', function(result) {
  if (result.data) {
    mno = result.data.mno
  }
})

//open-login tab
$(document).on('ready', function(){
  $('#logout-btn').on('click', function() {
    $.getJSON('http://localhost:8080/auth/logout.json', function(result) {
    })

  chrome.browserAction.setPopup({popup: "popup.html"});
    window.close();
  })


})

$(document).on('ready', function(){

  $('#enrole-btn').on('click', function() {
    chrome.windows.create({url: "local.html", type: "popup", width:300, height:450, left:1580, top:100}, function() {
    })
  })

  $('#list-btn').on('click', function() {
    $.getJSON('http://localhost:8080/movieperson/list.json', {'mno':mno}, function(result) {
      var templateFn = Handlebars.compile($('#list-template').text())
      var generatedHTML = templateFn(result.data)
      console.log(result.data)
      $('#movieperson-list').html(generatedHTML)
    })
    console.log('??')
    if (count % 2 == 0) {
      $('.profile').css('display', '')
      $('.btn-view').css('display', 'none')
      $('#movieperson-list').addClass('img-cropper')


    } else if (count % 2 == 1) {
      $('.profile').css('display', 'none')
      $('.btn-view').css('display', '')
      $('.img-cropper').removeClass('img-cropper')
    }
    count++
  }) // 영화인 목록


})

  // for(var i = 0; i < list.length; i++) {
  //   console.log(list[i].mpPhotopath)
  //   $('<img>').attr('src', 'http://localhost:8080/web/movieperson/' + list[i].mpPhotopath)
  //             .appendTo($('#movieperson-list')).css('display', 'inline-box').addClass('profile')
  //             .attr('id', 'img0' + i).css('cursor', 'pointer').attr('data-no', list[i].mpNo)
  //             .attr('onclick', 'write')
  // }






function callback() {
  console.log('done')
}
