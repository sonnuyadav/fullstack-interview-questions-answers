function isLeapYear(year){
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const currentYear = 2024;

if(isLeapYear(currentYear)){
    console.log(`${currentYear} is leap year`); // this will console
}else{
    console.log(`${currentYear} is not a leap year`);
}
