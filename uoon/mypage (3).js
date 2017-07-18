// Start
var cal = new Date()
var month = cal.getMonth(),
    year = cal.getFullYear(),
    weekday = cal.getDay() // weekday

_('#calendar').innerHTML = calendar(month, year, weekday);

$(document).on('click', '.prevBtn', function() {
  month = month - 1
  if (month < 0) {
    year = year - 1
    month = 11
  }
  _('#calendar').innerHTML = ''
  _('#calendar').innerHTML = calendar(month, year, weekday)

  if (month != cal.getMonth() || year != (cal.getYear()+1900)) {
    $('.week_event').css('color', 'lightgray');
  }
})

$(document).on('click', '.nextBtn', function() {
  month = month + 1
  if (month > 11) {
    year = year + 1
    month = 0
  }
  _('#calendar').innerHTML = ''
  _('#calendar').innerHTML = calendar(month, year, weekday)

  if (month != cal.getMonth() || year != (cal.getYear()+1900)) {
    $('.week_event').css('color', 'lightgray');
  }
    // 출력된 달이 현재 달과 일치하지 않을 경우 week_event 제거

})

// short queySelector
function _(s) {
  return document.querySelector(s);
};

// show info
// function showInfo(event) {
//   // link
//   var url = 'https://dl.dropboxusercontent.com/u/23834858/api/calendar.json';
//   // get json
//   getjson(url, function(obj) {
//     for (key in obj) {
//       // if has envent add class
//       if(_('[data-id="' + key + '"]')){
//         _('[data-id="' + key + '"]').classList.add('event');
//       }
//       if (event === key) {
//         // template info
//         var data = '<h3>' + obj[key].type + '</h3>' +
//             '<dl>' +
//             '<dt><dfn>Title:</dfn></dt><dd>' + obj[key].title + '</dd>' +
//             '<dt><dfn>Hour:</dfn></dt><dd>' + obj[key].time + '</dd>' +
//             '<dt><dfn>Venue:</dfn></dt><dd>' + obj[key].venue + '</dd>' +
//             '<dt><dfn>Location:</dfn></dt><dd>' + obj[key].location + '</dd>' +
//             '<dt><dfn>Description:</dfn></dt><dd>' + obj[key].desc + '</dd>' +
//             '<dt><dfn>More Info:</dfn></dt><dd><a href="' + obj[key].more +
//             '" title="More info">Here</a><dt></dd>' +
//             '</dl>';
//         return _('#calendar_data').innerHTML = data;
//       }
//     }
//   });
// }

// simple calendar
function calendar(month, year, weekday) {
  // show info on init
//  showInfo();
  // vars
  var day_of_week = new Array(
    '일', '월', '화',
    '수', '목', '금', '토'),
      month_of_year = new Array(
    '1월', '2월', '3월',
    '4월', '5월', '6월', '7월',
    '8월', '9월', '10월',
    '11월', '12월');

  var Calendar = new Date(),
  today = Calendar.getDate(),
  currMonth = Calendar.getMonth(),
  html = '';

  // start in 1 and this month
  Calendar.setDate(1); // 현재 월에서 1일로 초기화한다.
  Calendar.setYear(year);
  Calendar.setMonth(month);
//  console.log(Calendar.getDate());
//  console.log(Calendar.getDay()); // 2017년 7월 1일은 토요일이므로 숫자 '6'이 출력된다.
  // template calendar
  html += '<div class="prevBtn" style="float:left; margin-left:10%; color:white; cursor:pointer">이전</div>';
  html += '<div class="nextBtn" style="float:right; margin-right:10%; color:white; cursor:pointer">다음</div>';
  html += '<div class="head_cal" style="text-align:center">' + month_of_year[month] + '</div>';
  html += '<table>';
  // head
  html += '<thead>';
  html += '<tr class="subhead_cal"><th colspan="7" style="text-align:center">' + year + '</th></tr>';
  html += '<tr class="week_cal">';
  for (index = 0; index < 7; index++) {
    if (weekday == index) {
        html += '<th class="week_event" style="text-align:center">' + day_of_week[index] + '</th>';
    } else {
      html += '<th style="text-align:center">' + day_of_week[index] + '</th>';
    }
  }
  html += '</tr>';
  html += '</thead>';

  // body
  html += '<tbody class="days_cal">';
  html += '<tr>';
  // white zone
  for (index = 0; index < Calendar.getDay(); index++) {
    html += '<td class="white_cal"> </td>'; // 현재 달에 1일에 해당되는 요일(숫자)까지를 빈칸으로 채운다.
  }

  for (index = 0; index < 31; index++) {
    if (Calendar.getDate() > index) {

      week_day = Calendar.getDay();

      if (week_day === 0) { // 일요일 전날을 기준으로 잘라 한 줄씩 출력한다.
        html += '</tr>';
      }
      if (week_day !== 7) { // 일요일을 제외한 모든 요일에 테이블 데이터를 출력한다.
        // this day
        var day = Calendar.getDate();
        var info = (Calendar.getMonth() + 1) + '/' + day + '/' + Calendar.getFullYear();
        if (today === Calendar.getDate() && currMonth === Calendar.getMonth()) {
          html += '<td style="background-color:#EE7171"><a class="today_cal" style="color:white" href="#" data-id="' + info + '" onclick="showInfo(\'' + info + '\')">' +
            day + '</a></td>';

          //showInfo(info);

        } else {
          html += '<td><a href="#" data-id="' + info + '" onclick="showInfo(\'' + info + '\')">' +
            day + '</a></td>';
        }

      }
      if (week_day == 7) {
        html += '</tr>';
      }
    }
    Calendar.setDate(Calendar.getDate() + 1);
  } // end for loop

  return html;
}

//   Get Json data
// function getjson(url, callback) {
//   var self = this,
//       ajax = new XMLHttpRequest();
//   ajax.open('GET', url, true);
//   ajax.onreadystatechange = function() {
//     if (ajax.readyState == 4) {
//       if (ajax.status == 200) {
//         var data = JSON.parse(ajax.responseText);
//         return callback(data);
//       } else {
//         console.log(ajax.status);
//       }
//     }
//   };
//   ajax.send();
// }
