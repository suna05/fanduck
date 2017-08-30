setTimeout(function() {
  var options = {
    "type" : "basic",
    "title" : "alarm!",
    "message" : "notifications :) ",
    "iconUrl" : "icon.png"
  }

  chrome.notifications.create(options , callback)
}, 3000)
// 파라미터로 두가지를 넘겨줍니다. 임의로 options와 callback으로 만들겠ㅅ브니다.
// 옵션스는 알림에 관한 정보를 적어줍니다.
// 콜백은 알림이 뜨고나서 호출될 함수를 의미합니다.

function callback() {

  console.log('콜백함수 호출')
}
