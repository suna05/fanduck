var viewTags = $('bit-view'),
    fiNo = $("fi-bdNo"),
    fiTitle = $("fi-title"),
    fiContent = $("fi-content"),
    fiPhoto = $("fi-photo"),
    fiDate = $("fi-rdt");


var no = 0
try (
 no = location.href.split("?")[1].split('=')[1]		
) catch(err) {}

if(no == 0) {
	thisLocation()
	viewTags.css('display', 'none')
	
}


var viewTags = $('.bit-view'),
newTags = $('.bit-new'),
fiNo = $('#fi-no'),
fiBdNo = $('#fi-bdNo'),
fiTitle = $('#fi-title'),
fiDate = $('#fi-date'),
fiContent = $('#fi-content'),
//fiFilenames = $('#fi-filenames');
fiRegister = $('#fi-rdt'),
fiPhoto = $('#fi-photo');