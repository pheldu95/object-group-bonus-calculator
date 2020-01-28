const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?


// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

function bonusCalculator(employeeName, bonus, compensation, total){
  let employeeObject = {
    name: employeeName,
    bonusPercentage: bonus,
    totalCompensation: compensation,
    totalBonus: total
  };

  return employeeObject;
}

function calculateBonus(salary, rating, numberYears){
  let bonus = 0;
  if(rating <= 2){
    return bonus;
  }
  else if(rating === 3){
    bonus = salary * .04;

  }
  else if(rating === 4){
    bonus = salary * .06;

  }
  else if(rating === 5){
    bonus = salary * .1;

  }
  if(numberYears.length >= 4){
    let fifteenYearBonus = salary * .05;
    bonus= bonus + fifteenYearBonus;
  }
  if(salary > 65000) {
    let adjuster = salary * .01;
    bonus= bonus - adjuster;
  }
  return bonus;
}
console.log(calculateBonus(100000, 4,'80968'));
//console.log(bonusCalculator('Robert', '26835', '66000', 1));
// str = '12345';
// console.log(str.length);
