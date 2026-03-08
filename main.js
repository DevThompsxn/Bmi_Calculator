let personName = "Michael Oliver";
let weightKg = 80;
let heightM = 1.80

const heightSquared = heightM**2;
const bmi = weightKg / heightSquared;

isUnderWeight = bmi < 18.5;
isNormalWeight = bmi >= 18.5 && bmi < 25;
isOverWeight = bmi >= 25;