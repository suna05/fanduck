/*var req;
function openURL() {

  req = new XMLHttpRequest();
  req.onreadystatechange = handleStateChange;
  req.open('GET', 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=b0cac97aa508433ca9835e54ab51d7cd&itemPerPage=500', true);
  req.setRequestHeader("content-Type", "application/json;charset=utf-8")
  req.send()
}
function handleStateChange() {
  if(req.readyState == 4) {
    if(req.status == 200) {
      alert("성공 : " + req.responseText)
    } else {
      alert("실패 : " + req.status)
    }
  }
}
*/
chrome.contextMenus.create({"title" : "영화인 추가", "contexts":["all"], "onclick":openAddPerson})

function openAddPerson() {
  chrome.windows.create({url: "local.html", type: "popup", width:300, height:450, left:1580, top:100}, function() {
  })
}
