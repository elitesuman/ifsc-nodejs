# ifsc-nodejs

This is a nodejs API/module for getting IFSC details..(BANK NAME, BRANCH NAME, ADDRESS, CONTACT, CITY, DISTRICT, STATE).

## Installation

```js
var ifsc = require('ifsc-nodejs');

```

## Usage

```js
ifsc.getDetails(IFSC, function(error, data){ //In place of IFSC type your IFSC code..like "ABHY0065001"
	if(error){
		//you will get error message here if IFSC is wrong or something goes wrong
	}
	else{
		//here you will get details as json object
		console.log(data);
	}
});

```

## License

The code in this repository is licensed under the MIT License. License
text is available in the `LICENSE.txt` file.
