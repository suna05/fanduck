var options = {
  type : 'list',
  title : 'My First Popup With Chrome ',
  message : 'This is pretty cool!',
  iconUrl : '../images/logo.png',
  items: [{ title: "popup 1", message: "This is item 1."},
          { title: "popup 2", message: "This is item 2."},
          { title: "popup 3", message: "This is item 3."}]
}

chrome.notifications.create(options, callback)

function callback() {
  console.log('done')
}
