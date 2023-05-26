function getNumber(num) {
    let primeNum = "Простое", notPrimeNum = "Не простое";
      if (num <= 1 || num > 1000) { 
      return "Данные не верны";
      } else {
    for (let i = 2; i <= num/2; i++) {
      if (num % i == 0) {
        return notPrimeNum
      }
    }
    return primeNum
  }
  }
  
  console.log(getNumber(1));
  console.log(getNumber(0));
  console.log(getNumber(1000));
  console.log(getNumber(1001));
  console.log(getNumber(63));
  console.log(getNumber(2));  