var url = chrome.extension.getURL('toolbar.html');
var height = '45px';
var iframe = "<iframe src='"+url+"' id='myOwnCustomFirstToolbar12345' style='height:"+height+"'></iframe>";

$('body').append(iframe);
console.log("heeee")
