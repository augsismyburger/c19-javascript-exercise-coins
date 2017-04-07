
function coinCounter (ammountInput) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  var input = ammountInput * 100;
  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickles = 0;
  coinPurse.pennies = 0;
  var i = true;
  while (i) {
  	console.log(input);
  	console.log(coinPurse)
	if (input >= 25) {
		input -= 25;
		coinPurse.quarters++
	} else if (input >= 10) {
		input -= 10;
		coinPurse.dimes++
	} else if (input >= 05) {
		input -= .05;
		coinPurse.nickles++
	} else if (input >= 01) {
		input -= 01;
		coinPurse.pennies++
	} else {
		return coinPurse;
		i = false;
	}
  }
}
