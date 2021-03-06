let IS_PART_TIME = 1;
let IS_FULL_TIME = 2;
let NUM_OF_WORKING_DAYS = 20;
let MAX_HRS_IN_MONTH = 100;
let EMP_RATE_PER_HR = 20;

let isPresent = 1;
let empHrs = 0;
let totalEmpHrs = 0;
let empWage = 0;
let totalEmpWage = 0;
let totalWorkingDays = 0;
let empDailyWage = new Array();
let empWorkingDayAndDailyWage = new Map();

function getWorkingHours( empCheck ){
	switch (empCheck){
		case IS_PART_TIME:
         empHrs = 8;
         break;
      case IS_FULL_TIME:
         empHrs = 12;
         break;
      default:
         empHrs = 0;
	}
	return empHrs;
}
function calculateDailyWage(empHrs){
	return empHrs * EMP_RATE_PER_HR;
}



while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays <= NUM_OF_WORKING_DAYS ){
	totalWorkingDays++;
	let empCheck = Math.floor(Math.random() * 10) % 3;
	empHrs = getWorkingHours(empCheck);
	totalEmpHrs += empHrs;
	empDailyWage.push(calculateDailyWage(empHrs));
	empWorkingDayAndDailyWage.set(totalWorkingDays, calculateDailyWage(empHrs));
}
totalEmpWage = calculateDailyWage(totalEmpHrs);
console.log(empDailyWage);
console.log(totalEmpWage);
console.log(empWorkingDayAndDailyWage);
