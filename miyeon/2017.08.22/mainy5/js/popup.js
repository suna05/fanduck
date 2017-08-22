

//open-login tab
document.querySelector('#login-open-btn').addEventListener('click',
    function () {
      chrome.windows.create({
        'url':'../login.html',

         'type': 'popup', width: 330, height: 375,
      });
      window.close();

    });
