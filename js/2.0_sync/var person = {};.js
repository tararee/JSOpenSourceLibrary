var person = {};

var bank = {
	funds: 0,
	receiveDepositFrom: function(person) {
		this.funds += person.funds;
		person.funds = 0;	
	}
};

 console.log(person.funds); // undefined!

(function work(person){
	var end = Date.now() + 4000; // add 4 seconds
	while(Date.now() < end) {
		// zzzzzzzz	
	}

	person.funds = 100;
})(person);

// person.funds = (function work() {
// 	return 100;
// })();

console.log(person.funds); // 100

bank.receiveDepositFrom(person);

console.log(person.funds); // 0
