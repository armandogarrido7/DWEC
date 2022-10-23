// /*
// 1. The Age Calculator
// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.
// */

// function AgeCalculator(){
//     date =  new Date();
//     current_year = date.getFullYear();
//     birthday_year = prompt("Introduce el año de nacimiento");
//     age = parseInt(current_year - birthday_year);
//     document.write("Esta persona tiene " + (age-1) + " o " + age + " años" );
// }

// AgeCalculator()

date = new Date();
document.write(date.getFullYear() + "<br>");
document.write(date.getMonth()+ "<br>");
document.write(date.getDay() + "<br>");
document.write(date.getHours() + "<br>");
document.write(date.getMinutes() + "<br>");
document.write(date.getSeconds() + "<br>");

