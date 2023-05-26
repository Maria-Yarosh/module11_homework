function sum(num) {
    return function(otherNum) {
      return num + otherNum;
    };
  }
  
  console.log(sum(1)(2));
  console.log(sum(7)(55));