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
    name: 'Mayella',const employees = [
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

//function that calculates salary + the bonus.


function bonusCalculator(employeesArray){
  let newEmployeesArray = [];
  for (i=0; i <employeesArray.length; i++){
    let numberYears = employeesArray[i].employeeNumber;
    let salary = parseInt(employeesArray[i].annualSalary); //parseInt turns the employee salary into an integer so that the calculations work
    let rating = employeesArray[i].reviewRating;
    let totalSalary = 0;//this is the object that recieves the information from calculateBonus. so {totalSalary: totalSalary, bonusPercent: bonusPercent} goes into here
    let bonusPercent = 0;
    if(rating <= 2){
      bonusPercent = bonusPercent;
    }
    else if(rating === 3){
      bonusPercent = bonusPercent + .04;

    }
    else if(rating === 4){
      bonusPercent = bonusPercent + .06;

    }
    else if(rating === 5){
      bonusPercent = bonusPercent + .1;

    }
    if(numberYears.length >= 4){
      bonusPercent= bonusPercent + .05;
      //checking to see if they have been an employee for 15 or more years. if they have, it adds 5% to bonus
    }
    if(salary > 65000) {
      bonusPercent= bonusPercent - .01;
    }//if their salary is over 65000, then this subtracts 1% from the total bonus
    if(bonusPercent > .13){
      bonusPercent = .13;
    }
    totalSalary = (bonusPercent * salary) + salary;
    //console.log('testing what bonus is ', bonusPercent * salary);


    let employeeObject = {
       nameOfEmployee: employeesArray[i].name,
       bonusPercentage: bonusPercent * 100 + '%',
       totalCompensation: totalSalary, 
       totalBonus: bonusPercent * totalSalary
     }

     newEmployeesArray.push(employeeObject); //puts all of the employeeObjects into the new array

   }
   return newEmployeesArray;
  }


console.log(bonusCalculator(employees));

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

//function that calculates salary + the bonus.
function calculateBonus(numberYears, salary, rating ){
  let bonusPercent = 0;
  if(rating <= 2){
    bonusPercent = bonusPercent;
  }
  else if(rating === 3){
    bonusPercent = bonusPercent + .04;

  }
  else if(rating === 4){
    bonusPercent = bonusPercent + .06;

  }
  else if(rating === 5){
    bonusPercent = bonusPercent + .1;

  }
  if(numberYears.length >= 4){
    bonusPercent= bonusPercent + .05;
    //checking to see if they have been an employee for 15 or more years. if they have, it adds 5% to bonus
  }
  if(salary > 65000) {
    bonusPercent= bonusPercent - .01;
  }//if their salary is over 65000, then this subtracts 1% from the total bonus
  if(bonusPercent > .13){
    bonusPercent = .13;
  }
  let totalSalary = (bonusPercent * salary) + salary;
  //console.log('testing what bonus is ', bonusPercent * salary);
  return {totalSalary: totalSalary, bonusPercent: bonusPercent};//these two get passed into a new object in bonusCalculator
}

function bonusCalculator(employeesArray){
  let newEmployeesArray = [];
  for (i=0; i <employeesArray.length; i++){
    let longevity = employeesArray[i].employeeNumber;
    let employeeSalary = parseInt(employeesArray[i].annualSalary); //parseInt turns the employee salary into an integer so that the calculations work
    let employeeRating = employeesArray[i].reviewRating;
    let bonus = calculateBonus(longevity, employeeSalary, employeeRating);//this is the object that recieves the information from calculateBonus. so {totalSalary: totalSalary, bonusPercent: bonusPercent} goes into here
    let employeeObject = {
       nameOfEmployee: employeesArray[i].name,
       bonusPercentage: bonus.bonusPercent, //takes the bonusPercent from the bonus object. the bonusPercent comes from the calculateBonus function
       totalCompensation: bonus.totalSalary, //totalSalary comes from the calculateBonus function
       totalBonus: bonus.bonusPercent * bonus.totalSalary
     };
     newEmployeesArray.push(employeeObject); //puts all of the employeeObjects into the new array

  }
  return newEmployeesArray;
}
console.log(bonusCalculator(employees));
