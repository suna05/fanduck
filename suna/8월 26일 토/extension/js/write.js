var files, img
var chromeUpload = document.getElementById("represent-photo")
$(document).on('ready', function() {
  chromeUpload.addEventListener("change", handleFiles, false);
})

var imagesDiv = document.getElementById('images-div')

function handleFiles() {
  files = this.files;

  if (files.length) {
      imagesDiv.innerHTML = "";

      img = document.createElement("img");
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
        console.log(img)
        console.log(files)

      }


      imagesDiv.appendChild(img);

  }
}

var fiTitle = $('#fi-title'),
    fiDate = $('#fi-date'),
    fiContent = $('#fi-content'),
    fiBdNo = $('#fi-bdNo'),
    fiMpno = $('#fi-mpNO'),
    fiPhotoName = $('#represent-photo')

var mpNo = 15
var bdNo = 0

$('#add-btn').click(function(e) {

      $.post('http://localhost:8080/board/add.json', {
        'bdNo' : bdNo,
        'mpNo' : mpNo,
        'bdTitle': fiTitle.val(),
				'bdContent': fiContent.val(),
				'bdRegister': fiDate.val()


  }, function(result) {
    alert('add')
    alert(img)
  })
  console.log(fiPhotoName)
  console.log(fiContent.val())
  console.log(fiDate.val())
})
