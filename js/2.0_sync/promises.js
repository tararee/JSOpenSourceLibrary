var sleep = function(ms) {
	return function(callback) {
		setTimeout(callback, ms);	
	};
};

var squareWithCallback = function(num, callback) {
	sleep(1000).call(this, function() {
		callback(num * num);
	});
};

squareWithCallback(10, function(num) {
	squareWithCallback(num, function(num) {
		squareWithCallback(num, function(num) {
			squareWithCallback(num, function(num){
				squareWithCallback(num, function(num) {
					console.log(num);
				});
			});
		});
	});
});