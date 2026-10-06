// --- SECTION 1: Arithmetic ---
const grossSalary = 45000;
const taxRate = 0.25;
const uifRate = 0.01;
const medicalAid = 2500;

// Using * for tax and UIF
const taxAmount = grossSalary * taxRate;
const uifAmount = grossSalary * uifRate;

// Using / and % to calculate years and months worked
const monthsWorked = 30;
const yearsWorked = Math.floor(monthsWorked / 12); // / operator
const remainingMonths = monthsWorked % 12;         // % operator

// Using - and + for net salary
const netSalary = grossSalary - taxAmount - uifAmount - medicalAid;

console.log("Tax: R" + taxAmount);
console.log("UIF: R" + uifAmount);
console.log(`Worked: ${yearsWorked} years and ${remainingMonths} months`);
console.log("Net Salary: R" + netSalary);


// --- SECTION 2: Assignment ---
let cartTotal = 0;
cartTotal += 150; // +=
cartTotal += 85;  // +=
cartTotal += 220; // +=
cartTotal *= 0.9; // *= (10% discount)
cartTotal *= 1.15; // *= (15% VAT)
cartTotal -= 50;  // -= (R50 coupon)
console.log("Final cart total: R" + cartTotal.toFixed(2));


// --- SECTION 3: Comparison ---
const userAge = 22; // Renamed from 'age' to avoid conflict
const password = "securepass123";
const email = "thabo@example.com";
const confirmEmail = "thabo@example.com";

const isAgeValid = userAge >= 18;
const isPasswordValid = password.length >= 8;
const isEmailMatch = email === confirmEmail;
const isEmailMismatch = email !== confirmEmail;
const isUnderage = userAge <= 17;

console.log("Age valid:", isAgeValid);
console.log("Password valid:", isPasswordValid);
console.log("Email match:", isEmailMatch);
console.log("Email mismatch:", isEmailMismatch);
console.log("Underage?", isUnderage);


// --- SECTION 4: Logical ---
const loggedIn = true;
const emailVerified = false;
const isAdmin = true;
const hasPremiumAccess = (loggedIn && emailVerified) || isAdmin;
console.log("Premium access:", hasPremiumAccess);


// --- SECTION 5: Unary ---
const stringNumber = "25";
const convertedNumber = +stringNumber;
console.log(typeof convertedNumber, convertedNumber);

let isDarkMode = false;
isDarkMode = !isDarkMode;
console.log("Dark mode:", isDarkMode);
isDarkMode = !isDarkMode;
console.log("Dark mode:", isDarkMode);


// --- SECTION 6: Ternary ---
const membership = "trial";
const badge = membership === "premium" 
    ? "Premium Member" 
    : membership === "trial" 
        ? "Trial Member" 
        : "Free Member";
console.log(badge);


// --- SECTION 7: String Concatenation ---
const firstName = "Thabo";
const lastName = "Nkosi";
const greetingAge = 28; // Renamed from 'age' to avoid conflict

// Using +
const greetingPlus = "Welcome back " + firstName + " " + lastName + ", you are " + greetingAge + " years old.";
console.log(greetingPlus);

// Using template literal
const greetingTemplate = `Welcome back ${firstName} ${lastName}, you are ${greetingAge} years old.`;
console.log(greetingTemplate);


// --- INTERVIEW ANSWERS ---
/*
1. Prefix ++x vs postfix x++
   let x = 5;
   console.log(++x); // 6 (increments first, then returns)
   console.log(x++); // 6 (returns current value, then increments to 7)
   console.log(x);   // 7

2. Three real-world uses for modulo %
   - Checking if a number is even or odd: num % 2 === 0
   - Wrapping around a range (e.g., circular array index): (index + 1) % length
   - Time calculations: seconds % 60 to get remaining seconds

3. Is nested ternary good practice?
   Not really. It can be hard to read and debug. Better to use if/else or a switch statement 
   for multiple conditions. A single ternary is fine, but nesting more than one level 
   usually hurts readability.
*/