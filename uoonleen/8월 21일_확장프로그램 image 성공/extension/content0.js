
var uploadUrl = 'http://localhost:8080/movieperson/add.json';
var chromeUpload = document.getElementById("chrome-upload")
  chromeUpload.addEventListener("change", handleFiles, false);

var imagesDiv = document.getElementById('images-div')

function handleFiles() {
  var files = this.files;

  if (files.length) {
      imagesDiv.innerHTML = "";

      var img = document.createElement("img");
      img.src = window.URL.createObjectURL(files[0]);
      img.classList.add("obj");
      img.file = files[0]
      img.height = 150;
      img.onload = function() {
        window.URL.revokeObjectURL(this.src);
        /*
           1. createObjectURL()을 통해서 filse[0]의 data url 정보를 생성.
           2.그 정보를 img 객체의 src에다가 저장.
           3. revokeObjectURL() 함수를 통해 load 된 url정보를 revoke(취소, 해제) 시킨다.
        */

      }
      imagesDiv.appendChild(img);
  }
}

function sendFiles() {
  var imgs = document.querySelectorAll(".obj");
  new FileUpload(imgs[0], imgs[0].file);
}

function FileUpload(img, file) {
  var reader = new FileReader();
  var xhr = new XMLHttpRequest();
  this.xhr = xhr;

  xhr.open("POST", "http://localhost:8080/movieperson/test01.json");
  xhr.overrideMimeType('text/plain; charset=x-user-defined-binary');
  reader.onload = function(evt) {
    alert('reader.onload()..')
    xhr.send(evt.target.result);
    xhr.send()
  };
  reader.readAsBinaryString(file);
}

$('#upload-btn').click(function() {
  $.post('http://localhost:8080/filmperson/add.json', {
   'fpCode': peopleCd,
   'fpName': peopleNm
    }, function(result) {
      alert('filmperson add in extension!')
    }, 'json')
})
