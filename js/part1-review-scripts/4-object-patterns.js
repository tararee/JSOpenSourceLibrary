// /*
// creating private data
// */

// /* The module pattern */

// var anObject = (function() {

// 	// private data here

// 	return {
// 		// public stuff
// 	};

// })();

// // bike example

// var bike = (function() {

// 	// private
// 	var wheels = 2;
// 	var bellSound = "ring, ring";

// 	return {
// 		model: "monocog",

// 		wheelCount: function() {
// 			console.log( wheels );
// 		},

// 		ringBell: function() {
// 			console.log( bellSound );
// 		},

// 		setBell: function( newSound ) {
// 			bellSound = newSound;
// 		}
// 	}
// })();

// console.log(bike.wheels)
// bike.wheelCount();
// bike.ringBell();
// bike.setBell("dingaling");
// bike.ringBell();
/*this is where I will try to make a Pokemon*/

var pokemon = (function() {
//private
	var stingers = 9;
	var isPoisonous = true;
	var hissSound = "hisssssss!!!!";

	function stingerCount () {
		console.log("It has" + stingers + "stingers." );
	}
    console.log(stingerCount);

	
	});



/* revealing module pattern */

// var bike = (function() {

// 	// private
// 	var wheels = 2;
// 	var bellSound = "ring, ring";

// 	function wheelCount() {
// 		console.log( wheels );
// 	}

// 	function ringBell() {
// 		console.log( bellSound );
// 	}

// 	function setBell( newSound ) {
// 		bellSound = newSound;
// 	}

// 	return {
// 		model: "monocog",

// 		wheelCount: wheelCount,

// 		ringBell: ringBell,

// 		setBell: setBell
// 	}
// })();

// console.log(bike.wheels)
// bike.wheelCount();
// bike.ringBell();
// bike.setBell("dingaling");
// bike.ringBell();

 
// module pattern with private shared members via constructors 
// this shows shared data between all instances of Bike but 
// the rest is based on the inner bike's prototype


// var Bike = (function() {
// 	// this is shared across all Bikes
// 	var wheels = 2;

// 	function InsideBike(model) {
// 		this.model = model;
// 	}

// 	InsideBike.prototype.wheelCount = function() {
// 		console.log( wheels );
// 	};

// 	InsideBike.prototype.logModel = function() {
// 		console.log( this.model );
// 	};

// 	return InsideBike;
// })();

// var singlespeed = new Bike("monocog");
// var roadbike = new Bike("defy");
// roadbike.logModel();
// singlespeed.logModel();


