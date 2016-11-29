function coinCounter(amount) {
  // Initialize a JavaScript object to hold the coins
  amount = amount * 100;
  var coinPurse = {};

  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;


  while(amount!=0){
        if (amount>=25){
            amount = amount-25;
            coinPurse.quarters++;
        }
        else if (amount>=10){
            amount = amount-10;
            coinPurse.dimes++;
        }
        else if (amount>=5){
            amount = amount -5;
            coinPurse.nickels++;
        }
        else if (amount>=1){
            amount = amount - 1;
            coinPurse.pennies++;
        }
    }
    console.log(coinPurse);
}

 var coins = coinCounter(4.33)
 console.log(coins);