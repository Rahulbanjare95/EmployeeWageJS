let isPresent = 1;
let EMP_RATE_PER_HR = 20;
let empHrs = 0;
let empWage = 0;

let checkPresentOrAbsent = Math.floor(Math.random() * 10) % 2;
if (checkPresentOrAbsent == 1)
	empHrs = 8;
else
	empHrs = 0;

empWage = empHrs * EMP_RATE_PER_HR;
console.log(empWage);
