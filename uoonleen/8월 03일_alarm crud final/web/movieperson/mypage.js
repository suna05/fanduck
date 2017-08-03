var mpList = $('#mp-array'),
    calendarAlarm = $('#calendar_data'),
    alarmTemplateFn,
    alarmGeneratedHTML

  $.getJSON('../../movieperson/list.json', function(result) {
    var templateFn = Handlebars.compile($('#mp-template').text())
	var generatedHTML = templateFn(result.data) 
	
	mpList.html(generatedHTML)
  })
  
    Handlebars.registerHelper('readYN', function(ifRead, options) {
	  if(ifRead == false) {
		  Handlebars.registerHelper('openDate', function(mvDay, options) {
		    if ($('.head_cal').text().length - 1 < 2) { 
			  if((mvDay.substring(7, 8) == $('.head_cal').text().substring(0,1)) 
				  && mvDay.substring(2, 4) == $('.cal_year').text().substring(2, 4)) {
			    return options.fn(this);
			  }
			  return options.inverse(this);
		  	} else {
		  		if((mvDay.substring(6, 8) == $('.head_cal').text().substring(0,2)) 
					&& mvDay.substring(2, 4) == $('.cal_year').text().substring(2, 4)) {
				    return options.fn(this);
				}
			  return options.inverse(this);		
		  	}
		  });  
	    return options.fn(this);
	  }
	  return options.inverse(this);
  });  
  
 
  
  $.getJSON('../../castmember/list.json', function(result) {
	  
	  var castMemberList = result.data.list
	  	  alarmTemplateFn = Handlebars.compile($('#alarm-template').text())
	      alarmGeneratedHTML = alarmTemplateFn(result.data) 
	      alarmTmp = $('#alarm-template').text()
	  calendarAlarm.html(alarmGeneratedHTML)
  })
  

  $(document).on('click', '.moveBtn', function() {
	  
	$.getJSON('../../castmember/list.json', function(result) {
		var castMemberList2 = result.data.list
		var alarmGeneratedHTML2 = alarmTemplateFn(result.data) 
		calendarAlarm.html(alarmGeneratedHTML2)
	})
  })
  
    $(document).on('click', '#test01', function() {
	
	$.getJSON('../../castmember/list.json', function(result) {
	  console.log('ok1')
  	  var alarmTemplateFn2 = Handlebars.compile($('#alarm-template2').text())
  	  console.log(alarmTemplateFn2)
      var alarmGeneratedHTML2 = alarmTemplateFn2(result.data) 
	  calendarAlarm.html(alarmGeneratedHTML2)
	})
  })
  
  
  
