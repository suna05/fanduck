

var uploadUrl = 'http://localhost:8080/movieperson/add.json';
var chromeUpload = document.getElementById("chrome-upload")
  chromeUpload.addEventListener("change", handleFiles, false);

var imagesDiv = document.getElementById('images-div')

function handleFiles() {
  var files = this.files;

  if (files.length) {
      imagesDiv.innerHTML = "";
      var list = document.createElement("ul");
      imagesDiv.appendChild(list);
      
      for (var i = 0; i < files.length; i++) {
        var li = document.createElement("li");
        list.appendChild(li);

        var img = document.createElement("img");
        img.src = window.URL.createObjectURL(files[i]);
        img.height = 60;
        img.onload = function() {
          window.URL.revokeObjectURL(this.src);
        }
        li.appendChild(img);
        var info = document.createElement("span");
        info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
        li.appendChild(info);
    }
  }
