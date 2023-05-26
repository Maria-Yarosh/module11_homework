function userNum(num,otherNum) {
    let i = setInterval(() => {
      console.log(num++);
      if (num > otherNum) clearInterval(i);
    }, 1000)
  }
  
  userNum(5, 15);