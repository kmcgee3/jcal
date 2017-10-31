$(function(){
  $('#console-box').append('Please select a month, day, and year: <br>');
  	  // Variables for all functions
	  var myMonth ='pick a month!'; 
	  var myDayTens = 'pick a day (tens)';
	  var myDayOnes = 'pick a day (ones)';
	  var myYearThousands = 'pick a year(thousands)'; 
	  var myYearTens = 'pick a year(tens)'; 
	  var myYearOnes = 'pick a year(ones)'; 
	  
	  // Month
      $('.tumbly-month li').click(function(){	  
	  $('#console-box').append($(this).attr("class")+$(this).text());	  
	  //on click....load in the approp. value to the appr variable. 	  
	  myMonth = $(this).text();
  	  $('#console-box').append('MONTH ='+myMonth);
    $(this).one('selected').siblings().removeClass('selected');
; }); //Day-tens Place
	  $('.tumbly-days-tens li').click(function(){	  
	  $('#console-box').append($(this).attr("class")+$(this).text());	  
	  //on click....load in the approp. value to the appr variable.  
	  myDayTens = $(this).text();
  	  $('#console-box').append('DayTens ='+myDayTens);  
      $(this).one('selected').siblings().removeClass('selected');
; 
  }); // Day-ones Place
	  $('.tumbly-days-ones li').click(function(){
	  $('#console-box').append($(this).attr("class")+$(this).text());
	  //on click....load in the approp. value to the appr variable.
	  myDayOnes = $(this).text();
  	  $('#console-box').append('DayOnes ='+myDayOnes);
      $(this).one('selected').siblings().removeClass('selected');
; 
  }); // Year-thousands Place
	  $('.tumbly-years-thousands li').click(function(){
	  $('#console-box').append($(this).attr("class")+$(this).text());
	  //on click....load in the approp. value to the appr variable.   
	  myYearThousands = $(this).text();
  	  $('#console-box').append('YearThousands ='+myYearThousands);
	  $(this).one('selected').siblings().removeClass('selected');
; 
  }); // Year-Tens Place
	  $('.tumbly-years-tens li').click(function(){
	  $('#console-box').append($(this).attr("class")+$(this).text());
	  //on click....load in the approp. value to the appr variable.  
	  myYearTens = $(this).text();
  	  $('#console-box').append('YearTens ='+myYearTens); 
      $(this).one('selected').siblings().removeClass('selected');
; 
  });  // Year-Ones Place
	  $('.tumbly-years-ones li').click(function(){
	  $('#console-box').append($(this).attr("class")+$(this).text());
	  //on click....load in the approp. value to the appr variable. 
	  myYearOnes = $(this).text();
  	  $('#console-box').append('YearOnes ='+myYearOnes);	  
      $(this).one('selected').siblings().removeClass('selected');
; 
  }); // Final Function to include all variables
	  $('li').click(function(){
	  // All variables displayed
	  myDate = myMonth + ' ' + myDayTens + myDayOnes + myYearThousands + myYearTens + myYearOnes;   
	  // Printing output
	  $('#console-box').append('<br>YOUR DATE IS:' + myDate + '<br>');	
	  });  
});