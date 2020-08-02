let isPresent = 1;
let EMP_RATE_PER_HR = 20;
let IS_PART_TIME = 1;
let IS_FULL_TIME = 2;
let empHrs = 0;
let empWage = 0;

let checkPresentOrAbsent = Math.floor(Math.random() * 10) % 3;
if (checkPresentOrAbsent == IS_PART_TIME)
	empHrs = 8;
else if (checkPresentOrAbsent == IS_FULL_TIME)
	empHrs = 12;
else
	empHrs = 0;

empWage = empHrs * EMP_RATE_PER_HR;
console.log(empWage);
