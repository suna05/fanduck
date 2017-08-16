chrome.contextMenus.create({
  title:"fanduck toolkit",
  contexts: ["selection"],
  onclick: myFunction
});
function myFunction(selectedText) {
  console.log("sdfsdf")
}
