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
    chrome.windows.create({url: "local.html" + 27, type: "popup", width:300, height:450, left:1580, top:100}, function() {
    })
  })

  /* 영화인 목록 띄우기
      1. listBtn 클릭 시 movieperson controller에 list 요청 -> mpNo, mpPhotopath 값 받아옴
      2. 영화인 사진을 띄우고 나머지 메뉴 hide
      3. 다시 클릭했을 땐 사진이 지워지고 메뉴 바가 뜸
  */
  $('#list-btn').on('click', function() {
    console.log('??')
    if (count % 2 == 0) {

      $('.btn-view').css('display', 'none')
      $('#movieperson-list').addClass('img-cropper')

      $.get('http://localhost:8080/movieperson/list.json', { mno : mno }, function(result) {

        var list = result.data.list

        for(var i = 0; i < list.length; i++) {
          console.log(list[i].mpPhotopath)
          $('<img>').attr('src', 'http://localhost:8080/web/movieperson/' + list[i].mpPhotopath)
                    .appendTo($('#movieperson-list')).css('display', 'inline-box').addClass('profile')
                    .attr('id', 'img0' + i).css('cursor', 'pointer').attr('data-no', list[i].mpNo)
        }

        $('.profile').click(function() {
            chrome.windows.create({url: "local.html?mpNo=" + $(this).attr('data-no'), type: "popup", width:300, height:450, left:1580, top:100}, function() {})
        })
      }) // get movie person list

      $('.profile').on('click', function() {
        console.log('확인')
      })
    } else if (count % 2 == 1) {
      $('.profile').remove()
      $('.btn-view').css('display', '')
      $('.img-cropper').removeClass('img-cropper')
    }
    count++
  }) // 영화인 목록

}) // document on ready


  // $('#enrole-btn').on('click', function() {
  //   chrome.windows.create({url: "local.html", type: "popup", width:300, height:450, left:1580, top:100}, function() {
  //   })
  // })







function callback() {
  console.log('done')
}
