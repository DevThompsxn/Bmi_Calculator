let personName = "Michael Oliver";
let weightKg = 80;
let heightM = 1.80

const heightSquared = heightM**2;
const bmi = weightKg / heightSquared;

isUnderWeight = bmi < 18.5;
isNormalWeight = bmi >= 18.5 && bmi < 25;
isOverWeight = bmi >= 25;

isHighRisk = isOverWeight || weightKg > 90;

console.log("============= BMI HEALTH REPORT ============");
console.log("Name:", personName);
console.log("BMI:", bmi.toFixed(2));
console.log("Underweight:", isUnderWeight);
console.log("Normal Weight:", isNormalWeight);
console.log("Overweight:", isOverWeight);
console.log("High Risk Alert:", isHighRisk);