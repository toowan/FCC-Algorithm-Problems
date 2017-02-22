// FRIENDLY DATE RANGES

/*

Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.

Examples:

makeFriendlyDates(["2016-07-01", "2016-07-04"]) // ["July 1st","4th"]

makeFriendlyDates(["2016-07-01", "2018-07-04"]) // ["July 1st, 2016", "July 4th, 2018"].

*/

function makeFriendlyDates(arr) {  // arr = ["2016-12-01", "2018-02-03"]
  var newDateRange = []; 
  var firstDate; 
  var secondDate; 
  
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  // Split strings of dates into arrays
  var startDateStr = arr[0].split('-'); // ["2016", "12", "01"]
  var endDateStr = arr[1].split('-'); // ["2018", "02", "03"]
  
  // Convert to date format
  var startDate = new Date(startDateStr[0], startDateStr[1]-1, startDateStr[2]);
  var endDate =  new Date(endDateStr[0], endDateStr[1]-1, endDateStr[2]);     
  
  // Get year, month, and day for the date range 
  var startYear = startDate.getFullYear(),
    startMonth = startDate.getMonth(),
    startDay = startDate.getDate();
 
  var endYear = endDate.getFullYear(),
    endMonth = endDate.getMonth(),
    endDay = endDate.getDate();
  
  // Calculate number of days between date range
  var diffDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)); 
  
  
  // Handles the case of the day's endings.
  function dayEnding(day) {
    if (day === 1 || day === 21 || day === 31) {
      return day + 'st';
    } else if (day === 2 || day === 22) {
      return day + 'nd';
    } else if (day === 3 || day === 23) {
      return day + 'rd';
    } else {
      return day + 'th';
    }
  }

  
 // If dates are exactly the same
  if (diffDays === 0) {
   firstDate = months[startMonth] + " " + dayEnding(startDay) + ", " + startYear;
   newDateRange.push(firstDate); 
  }  
  
  // If range difference is less than 1 year 
  else if (diffDays < 365) {
    if (startYear !== endYear && startMonth === endMonth) {
    firstDate = months[startMonth] + " " + dayEnding(startDay) + ", " + startYear;
    secondDate = months[endMonth] + " " + dayEnding(endDay);
    } else if (startYear === endYear && startMonth === endMonth) {
    firstDate = months[startMonth] + " " + dayEnding(startDay);
    secondDate = dayEnding(endDay);
    } else if (startYear === endYear && startMonth !== endMonth) {
    firstDate = months[startMonth] + " " + dayEnding(startDay) + ", " + startYear;
    secondDate = months[endMonth] + " " + dayEnding(endDay); 
    } else if (startYear !== endYear && diffDays <= 365) {
    firstDate = months[startMonth] + " " + dayEnding(startDay);
    secondDate = months[endMonth] + " " + dayEnding(endDay);
  }

  newDateRange.push(firstDate);
  newDateRange.push(secondDate);
 } 
 
 // If range difference is greater or equal to 1 year
 else if (diffDays >= 365) {
   firstDate = months[startMonth] + " " + dayEnding(startDay) + ", " + startYear;
   secondDate = months[endMonth] + " " + dayEnding(endDay) + ", " + endYear;
   newDateRange.push(firstDate);
   newDateRange.push(secondDate);
 }
  
  
  // return new date
  return newDateRange; 
  
}


// TEST CASES
makeFriendlyDates(["2016-07-01", "2016-07-04"]) // ["July 1st","4th"].
makeFriendlyDates(["2016-12-01", "2017-02-03"]) // ["December 1st","February 3rd"].
makeFriendlyDates(["2016-12-01", "2018-02-03"]) // ["December 1st, 2016","February 3rd, 2018"].
makeFriendlyDates(["2017-03-01", "2017-05-05"]) // ["March 1st, 2017","May 5th"]
makeFriendlyDates(["2018-01-13", "2018-01-13"]) // ["January 13th, 2018"].
makeFriendlyDates(["2022-09-05", "2023-09-04"]) // ["September 5th, 2022","September 4th"].
makeFriendlyDates(["2022-09-05", "2023-09-05"]) // ["September 5th, 2022","September 5th, 2023"].



​