let weight = Number(prompt("Please enter your weight (in kg):"));
let height = Number(prompt("Please enter your height (in meters):"));
let bmi = weight / (height * height);

if (bmi < 18.5) {
  console.log(`Your BMI is ${bmi} and you are Underweight.`);
} else if (bmi >= 18.5 && bmi < 25) {
  console.log(`Your BMI is ${bmi} and you are Normal weight.`);
} else if (bmi >= 25 && bmi < 30) {
  console.log(`Your BMI is ${bmi} and you are Overweight.`);
} else {
  console.log(`Your BMI is ${bmi} and you are Obese.`);
}
