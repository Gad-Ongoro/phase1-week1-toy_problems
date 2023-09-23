// prompt for basic salary and benefits
let basicSalary = prompt("Enter your basic salary in digits...");
let benefits = prompt("Enter your benefits in digits...");

//Deductables
let paye, nhif, nssf;

//example
//let basicSalary = 100000;
//let benefits = 5000;

//gross
let grossSalary = (basicSalary + benefits);

//paye
function payeCalculator(basicPay){
    if (basicPay <= 24000){
        return (basicPay * 0.1);
    } else if ((basicPay > 24000) && (basicPay <= 500000)){
        return (basicPay * 0.3);
    } else if ((basicPay > 500000) && (basicPay <= 800000)){
        return (basicPay * 0.325);
    } else if (basicPay > 800000) {
        return (basicPay * 0.35);
    }
}

paye = payeCalculator(basicSalary);

//nhif
function nhifCalculator(basicPay){
    if (basicPay < 6000){
        return (basicPay - (basicPay - 150));
    } else if ((basicPay >= 6000) && (basicPay < 20000)){
        return (basicPay - (basicPay - 600));
    } else if ((basicPay >= 20000) && (basicPay < 40000)){
        return (basicPay - (basicPay - 1000));
    } else if ((basicPay >= 40000) && (basicPay < 80000)){
        return (basicPay - (basicPay - 1400));
    } else if (basicPay > 80000){
        return (basicPay - (basicPay - 1700));
    }
}

nhif = nhifCalculator(basicSalary);

//nssf
function nssfCalculator(basicPay){
    return (basicPay * 0.06);
}

nssf = nssfCalculator(basicSalary);

// total pay after deductions
let netSalary = (grossSalary - (paye + nhif + nssf));

//to test - comment out lines 2 and 3 and remove comments from lines 9 and 10
console.log(netSalary);