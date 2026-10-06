// ==========================================
// CHALLENGE 1: OPERATORS
// ==========================================

// --- SECTION 1: Arithmetic ---
const grossSalary = 45000;
const taxRate = 0.25;
const uifRate = 0.01;
const medicalAid = 2500;

const taxAmount = grossSalary * taxRate;
const uifAmount = grossSalary * uifRate;

const monthsWorked = 30;
const yearsWorked = Math.floor(monthsWorked / 12); // / operator
const remainingMonths = monthsWorked % 12;         // % operator

const netSalary = grossSalary - taxAmount - uifAmount - medicalAid; // - operator

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
const userAge = 22;
const password = "securepass123";
const email = "thabo@example.com";
const signupConfirmEmail = "thabo@example.com"; // Renamed to avoid conflict

const isAgeValid = userAge >= 18;
const isPasswordValid = password.length >= 8;
const isEmailMatch = email === signupConfirmEmail;
const isEmailMismatch = email !== signupConfirmEmail;
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
const greetingAge = 28;

const greetingPlus = "Welcome back " + firstName + " " + lastName + ", you are " + greetingAge + " years old.";
console.log(greetingPlus);

const greetingTemplate = `Welcome back ${firstName} ${lastName}, you are ${greetingAge} years old.`;
console.log(greetingTemplate);


// ==========================================
// INTERVIEW ANSWERS
// ==========================================
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


// ==========================================
// CHALLENGE 2: PART A - 20 COMPARISONS
// ==========================================

// 1. 0 == false
// Prediction: true
// Why: false converts to 0, so 0 == 0 is true
console.log(1, 0 == false);

// 2. 0 === false
// Prediction: false
// Why: Different types (number vs boolean), strict equality checks type
console.log(2, 0 === false);

// 3. "" == 0
// Prediction: true
// Why: "" converts to 0, so 0 == 0 is true
console.log(3, "" == 0);

// 4. "" === 0
// Prediction: false
// Why: Different types (string vs number)
console.log(4, "" === 0);

// 5. "0" == 0
// Prediction: true
// Why: "0" converts to 0, so 0 == 0 is true
console.log(5, "0" == 0);

// 6. "0" === 0
// Prediction: false
// Why: Different types (string vs number)
console.log(6, "0" === 0);

// 7. null == undefined
// Prediction: true
// Why: Special rule in JS — null and undefined are loosely equal to each other
console.log(7, null == undefined);

// 8. null === undefined
// Prediction: false
// Why: Different types (null vs undefined)
console.log(8, null === undefined);

// 9. null == 0
// Prediction: false
// Why: null only loosely equals undefined, not any number
console.log(9, null == 0);

// 10. null >= 0
// Prediction: true
// Why: Relational operators convert null to 0, so 0 >= 0 is true
console.log(10, null >= 0);

// 11. null > 0
// Prediction: false
// Why: null converts to 0, so 0 > 0 is false
console.log(11, null > 0);

// 12. NaN == NaN
// Prediction: false
// Why: NaN is never equal to anything, including itself
console.log(12, NaN == NaN);

// 13. NaN === NaN
// Prediction: false
// Why: Same reason — NaN is never equal to itself
console.log(13, NaN === NaN);

// 14. Object.is(NaN, NaN)
// Prediction: true
// Why: Object.is is a special method that treats NaN as equal to NaN
console.log(14, Object.is(NaN, NaN));

// 15. +0 === -0
// Prediction: true
// Why: Strict equality considers +0 and -0 to be the same value
console.log(15, +0 === -0);

// 16. Object.is(+0, -0)
// Prediction: false
// Why: Object.is distinguishes between positive and negative zero
console.log(16, Object.is(+0, -0));

// 17. [1,2,3] == "1,2,3"
// Prediction: true
// Why: Array converts to string "1,2,3", which matches the string
console.log(17, [1,2,3] == "1,2,3");

// 18. [] == false
// Prediction: true
// Why: [] converts to "" then to 0; false converts to 0; 0 == 0 is true
console.log(18, [] == false);

// 19. [] == 0
// Prediction: true
// Why: [] converts to "" then to 0; 0 == 0 is true
console.log(19, [] == 0);

// 20. [0] == false
// Prediction: true
// Why: [0] converts to "0" then to 0; false converts to 0; 0 == 0 is true
console.log(20, [0] == false);


// ==========================================
// CHALLENGE 2: PART B - FORM VALIDATOR
// ==========================================

// --- Test Case 1: Should pass all checks ---
let newPassword = "SecurePass123";
let confirmPassword = "SecurePass123";
let currentEmail = "thabo@example.com";
let confirmEmail = "thabo@example.com";

console.log("\n--- Test Case 1 ---");
console.log("Passwords match:", newPassword === confirmPassword);
console.log("Emails match:", currentEmail === confirmEmail);
console.log("New password is NOT current email:", newPassword !== currentEmail);
console.log("Password length >= 8:", newPassword.length >= 8);


// --- Test Case 2: Should fail at least two checks ---
newPassword = "pass";
confirmPassword = "password";
currentEmail = "test@test.com";
confirmEmail = "test@test.com";

console.log("\n--- Test Case 2 ---");
console.log("Passwords match:", newPassword === confirmPassword);
console.log("Emails match:", currentEmail === confirmEmail);
console.log("New password is NOT current email:", newPassword !== currentEmail);
console.log("Password length >= 8:", newPassword.length >= 8);


/*
Comment on equality operator:
I used strict equality (===) for password and email comparisons. This matters because 
loose equality (==) performs type coercion. For example, "123" == 123 is true, but 
passwords are strings. Using === ensures both value and type match exactly, preventing 
accidental matches and security bugs.
*/

// ==========================================
// PART D: PREDICT OUTPUTS
// ==========================================

// 1. 0 || "default"
// Prediction: "default"
// Why: 0 is falsy, so || returns the second operand
console.log(1, 0 || "default");

// 2. "" || "fallback"
// Prediction: "fallback"
// Why: Empty string is falsy, so || moves to the next value
console.log(2, "" || "fallback");

// 3. 0 ?? "default"
// Prediction: 0
// Why: ?? only falls through on null/undefined, and 0 is a valid value
console.log(3, 0 ?? "default");

// 4. null ?? "default"
// Prediction: "default"
// Why: null triggers the fallback with ??
console.log(4, null ?? "default");

// 5. undefined ?? "default"
// Prediction: "default"
// Why: undefined triggers the fallback with ??
console.log(5, undefined ?? "default");

// 6. "" ?? "default"
// Prediction: ""
// Why: "" is not null/undefined, so ?? keeps it
console.log(6, "" ?? "default");

// 7. "hi" && "bye"
// Prediction: "bye"
// Why: "hi" is truthy, so && returns the second operand
console.log(7, "hi" && "bye");

// 8. 0 && "bye"
// Prediction: 0
// Why: 0 is falsy, so && short-circuits and returns 0
console.log(8, 0 && "bye");

// 9. true ? "yes" : "no"
// Prediction: "yes"
// Why: condition is true, so the first branch runs
console.log(9, true ? "yes" : "no");

// 10. false ? "yes" : "no"
// Prediction: "no"
// Why: condition is false, so the second branch runs
console.log(10, false ? "yes" : "no");

// // ==========================================
// PART A: GRADE CHAIN (Fixed)
// ==========================================

// Test all eight scores as specified
const scores = [95, 82, 73, 65, 54, 42, 0, 100];

scores.forEach(score => {
    const grade = score >= 90 ? "A"
                : score >= 80 ? "B"
                : score >= 70 ? "C"
                : score >= 60 ? "D"
                : score >= 50 ? "E"   // <- This was missing
                : "F";
    console.log(`Score ${score} → Grade ${grade}`);
});

/*
Output:
Score 95 → Grade A
Score 82 → Grade B
Score 73 → Grade C
Score 65 → Grade D
Score 54 → Grade E
Score 42 → Grade F
Score 0 → Grade F
Score 100 → Grade A
*/


// ==========================================
// PART B: DEFAULTS WITH || AND ?? (Fixed)
// ==========================================

// User 1: all fields missing
const user1 = {
    displayName: undefined,
    theme: undefined,
    maxResults: undefined,
    lastLogin: undefined,
    notificationCount: undefined,
};

// User 2: notificationCount is 0, theme is empty string
const user2 = {
    displayName: "",
    theme: "",
    maxResults: null,
    lastLogin: null,
    notificationCount: 0,
};

function parseUserProfile(user) {
    // Using || for displayName (empty string should fall back to Guest)
    const displayName = user.displayName || "Guest User";
    
    // Using || for theme (empty string should fall back to light)
    const theme = user.theme || "light";
    
    // Using || for maxResults
    const maxResults = user.maxResults || 10;
    
    // Using ?? for lastLogin (only null/undefined trigger fallback)
    const lastLogin = user.lastLogin ?? "Never";
    
    // Using ?? for notificationCount (0 is valid, should NOT fall back)
    const notificationCount = user.notificationCount ?? 0;

    return { displayName, theme, maxResults, lastLogin, notificationCount };
}

console.log("User 1:", parseUserProfile(user1));
console.log("User 2:", parseUserProfile(user2));

/*
Output:
User 1: { displayName: 'Guest User', theme: 'light', maxResults: 10, lastLogin: 'Never', notificationCount: 0 }

User 2: { displayName: 'Guest User', theme: 'light', maxResults: 10, lastLogin: 'Never', notificationCount: 0 }

Why || and ?? behave differently for user2:

For user2, theme is an empty string "". Using || returns "light" because 
"" is falsy. But ?? would return "" because empty string is not null/undefined.

For notificationCount = 0: || would return the fallback (since 0 is falsy), 
but ?? correctly keeps 0 because 0 is a valid value, not nullish.

This is why ?? is safer for numbers and empty strings — it only kicks in for 
null or undefined, not for every falsy value.
*/


// ==========================================
// PART C: NESTED PROPERTY ACCESS (Fixed)
// ==========================================

// Technique 1: && guard clauses
function getCity1(user) {
    return user && user.address && user.address.city;
}

// Technique 2: optional chaining
function getCity2(user) {
    return user?.address?.city;
}

// Technique 3: optional chaining with default
function getCity3(user) {
    return user?.address?.city ?? "Unknown city";
}

// Test objects
const fullUser = { name: "Thabo", address: { city: "Johannesburg" } };
const noAddress = { name: "Lerato" };
const nullUser = null;

console.log("--- Technique 1 (&&) ---");
console.log(getCity1(fullUser));   // "Johannesburg"
console.log(getCity1(noAddress));  // undefined (because user.address is undefined, short-circuits)
console.log(getCity1(nullUser));   // null (because user is null, returns user itself)

console.log("--- Technique 2 (?.) ---");
console.log(getCity2(fullUser));   // "Johannesburg"
console.log(getCity2(noAddress));  // undefined
console.log(getCity2(nullUser));   // undefined

console.log("--- Technique 3 (?., with ??) ---");
console.log(getCity3(fullUser));   // "Johannesburg"
console.log(getCity3(noAddress));  // "Unknown city"
console.log(getCity3(nullUser));   // "Unknown city"

/*
Key difference between the three techniques:

Technique 1 (&&): Works, but if user is null, it returns null (not undefined).
It also fails if any intermediate property is 0 or "" (but we don't have that here).

Technique 2 (?.): Cleanest syntax. Always returns undefined if the chain breaks,
regardless of whether it's the user, address, or city that's missing.

Technique 3 (?. with ??): Same as technique 2, but provides a fallback value.
This is the safest for user-facing output.
*/ 

// ==========================================
// CHALLENGE 7 - SCENARIO 1: SAVINGS INTEREST
// ==========================================

// Inputs from the brief
const principal = 25000;          // R25,000 deposit
const annualRate = 0.075;        // 7.5% annual interest
const timesCompounded = 12;      // Monthly compounding
const years = 3;                 // 3-year period

// Compound interest formula: A = P(1 + r/n)^(nt)
const finalBalance = principal * Math.pow(1 + annualRate / timesCompounded, timesCompounded * years);

// Total interest earned
const totalInterest = finalBalance - principal;

// Effective annual rate (EAR)
const effectiveAnnualRate = Math.pow(1 + annualRate / timesCompounded, timesCompounded) - 1;

// Manual formatter — US/UK style: commas for thousands, dot for decimals
function formatRand(value) {
    const fixed = value.toFixed(2);              // "31286.15"
    const [whole, decimal] = fixed.split(".");   // ["31286", "15"]
    const withCommas = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");  // "31,286"
    return "R " + withCommas + "." + decimal;    // "R 31,286.15"
}

console.log("=== Savings Interest Calculator ===");
console.log("Deposit: " + formatRand(principal));
console.log("Period: " + years + " years");
console.log("Annual rate: " + (annualRate * 100).toFixed(1) + "%");
console.log("Compounded: " + timesCompounded + " times per year");
console.log("");
console.log("Final balance after " + years + " years: " + formatRand(finalBalance));
console.log("Total interest earned: " + formatRand(totalInterest));
console.log("Effective annual rate: " + (effectiveAnnualRate * 100).toFixed(2) + "%");

// ==========================================
// CHALLENGE 7 - SCENARIO 2: TIERED FEES
// ==========================================

function calculateFee(balance) {
    return balance < 1000 ? 25
         : balance < 5000 ? 50
         : balance < 25000 ? 75
         : 0;
}

[500, 1500, 10000, 50000].forEach(balance => {
    const fee = calculateFee(balance);
    console.log(`Balance ${formatRand(balance)} → Fee ${formatRand(fee)}/month → Annual ${formatRand(fee * 12)}`);
});

/* Output:
Balance R 500.00 → Fee R 25.00/month → Annual R 300.00
Balance R 1,500.00 → Fee R 50.00/month → Annual R 600.00
Balance R 10,000.00 → Fee R 75.00/month → Annual R 900.00
Balance R 50,000.00 → Fee R 0.00/month → Annual R 0.00
*/


// ==========================================
// CHALLENGE 7 - SCENARIO 3: CURRENCY CONVERSION
// ==========================================

const zarAmount = 15750.33;
const exchangeRate = 18.42;
const commissionRate = 0.025;

// Commission in ZAR
const commission = zarAmount * commissionRate;

// ZAR remaining after commission
const zarAfterCommission = zarAmount - commission;

// Convert to USD
const usdReceived = zarAfterCommission / exchangeRate;

// Same comma formatting as formatRand, but with a dollar sign
function formatUSD(value) {
    const fixed = value.toFixed(2);
    const [whole, decimal] = fixed.split(".");
    const withCommas = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return "$" + withCommas + "." + decimal;
}

console.log("=== Currency Conversion ===");
console.log("Amount sent: " + formatRand(zarAmount));
console.log("Exchange rate: 1 USD = R" + exchangeRate.toFixed(2));
console.log("Commission (2.5%): " + formatRand(commission));
console.log("After commission: " + formatRand(zarAfterCommission));
console.log("USD received: " + formatUSD(usdReceived));

/* Output:
=== Currency Conversion ===
Amount sent: R 15,750.33
Exchange rate: 1 USD = R18.42
Commission (2.5%): R 393.76
After commission: R 15,356.57
USD received: $833.69
*/

/*
Floating-point answer:

The problem shows up in the commission calculation. 2.5% as 0.025 can't be represented
exactly in binary, so 15750.33 * 0.025 gives something like 393.75825000000004 in
the raw number. Then dividing by 18.42 can introduce another tiny rounding error.

I handled it by calling toFixed(2) inside the formatter, which rounds to 2 decimal
places before doing the string manipulation. That way $833.689... becomes $833.69
instead of getting sliced off at $833.68.

This is the same thing as 0.1 + 0.2 !== 0.3 from Module 2. Real banks don't store
R15,750.33 as a float — they store it as 1575033 cents and do integer math, then
divide by 100 at the very end. If you're building anything that actually handles
money, you do it in cents, not decimals.
*/
// ==========================================
// CHALLENGE 6 - BITWISE PERMISSIONS
// ==========================================

const READ = 1;    // 0001
const WRITE = 2;   // 0010
const DELETE = 4;  // 0100
const ADMIN = 8;   // 1000

// Helper to show decimal and binary side by side
function show(label, value) {
    const binary = value.toString(2).padStart(4, "0");
    console.log(`${label}: ${value} (binary ${binary})`);
}

// 1. User with READ + WRITE
const userPerms = READ | WRITE;
show("User permissions", userPerms);          // 3 (binary 0011)

// 2. Admin with all permissions
const adminPerms = READ | WRITE | DELETE | ADMIN;
show("Admin permissions", adminPerms);        // 15 (binary 1111)

// 3. Check if user has READ
console.log("Has READ:", (userPerms & READ) ? "Yes" : "No");     // Yes

// 4. Check if user has DELETE
console.log("Has DELETE:", (userPerms & DELETE) ? "Yes" : "No"); // No

// 5. Grant DELETE to first user
let updatedUser = userPerms | DELETE;
show("After granting DELETE", updatedUser);   // 7 (binary 0111)

// 6. Revoke WRITE from first user
updatedUser &= ~WRITE;
show("After revoking WRITE", updatedUser);    // 5 (binary 0101)

// 7. Toggle ADMIN twice with XOR
let toggled = updatedUser ^ ADMIN;
show("After 1st ADMIN toggle", toggled);      // 13 (binary 1101)
toggled = toggled ^ ADMIN;
show("After 2nd ADMIN toggle", toggled);      // 5 (binary 0101) — back to original

// 8. SUPER_ADMIN as next power of 2
const SUPER_ADMIN = ADMIN << 1;
show("SUPER_ADMIN", SUPER_ADMIN);             // 16 (binary 10000)

// Bonus: SUPER_ADMIN with all permissions
const superAdminPerms = adminPerms | SUPER_ADMIN;
show("Super admin (all + SUPER)", superAdminPerms); // 31 (binary 11111)


/* ==========================================
   INTERVIEW ANSWERS — BITWISE PERMISSIONS
   ==========================================

1. Why use bitwise flags instead of an array?

   Two reasons.

   First, memory. One number holds up to 31 permissions. An array of strings
   doesn't. If you have thousands of users and you're checking permissions on
   every request, that matters.

   Second, speed. Checking a permission is one & operation. With an array
   you'd have to loop or call includes(). Not a huge difference by itself,
   but in a busy system it adds up.

   Also, one integer is easy to store in a database or send over a network.
   An array needs converting every time.

2. What's the downside? When would you not use it?

   Readability. If you see permissions = 13, that means nothing until you do
   the math. With ['read', 'delete', 'admin'] you just read it. New devs on
   the team have to learn the bit math before they can debug anything.

   I also wouldn't use it if there are more than 31 permissions, because
   JavaScript bitwise only works on 32-bit integers. And if permissions need
   extra data — like who gave it or when it expires — bitwise can't hold that.

3. Difference between &/| and &&/|| — where's the silent bug?

   & and | work on the bits of a number. && and || work on truthy/falsy
   values and return one of the operands.

   If I write if (permissions && ADMIN) instead of if (permissions & ADMIN),
   the check is wrong. A user with permissions = 2 is truthy, so the if
   passes. That's a permission bypass that wouldn't throw any error. That's
   the dangerous part. A typo you'd catch. A permission bypass you might not
   find for a long time.
*/