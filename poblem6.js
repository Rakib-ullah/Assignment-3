/** Problem 06 :  (Current Salary )  */
var experience = 18;
var startingSalary = 38500;
//write your code here

var salary = startingSalary;
for (var i = 1 ; i <= experience; i++) {
    salary = salary * 1.05;
}
console.log(salary.toFixed(2))