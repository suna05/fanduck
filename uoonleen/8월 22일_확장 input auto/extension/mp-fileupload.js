var inputElement  = document.getElementById('chrome-upload').files[0];

document.addEventListener('DOMContentLoaded', function () {
  inputElement.addEventListener("change", handleFiles, false);
})

function handleFiles() {
  alert('onchange..')
  var fileList = this.files; /* now you can work with the file list */
}
