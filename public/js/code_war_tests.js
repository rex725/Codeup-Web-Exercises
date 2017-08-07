function findOutlier(integers){
	var evenIntegers = [];
	var oddIntegers = [];
	integers.forEach(function(element, index, array) {
		if(element % 2 === 0) {
			evenIntegers.push(element);
		} else if(element % 2 !== 0) {
			oddIntegers.push(element);
		}
	});
	if(evenIntegers.length < oddIntegers.length) {
		return parseInt(evenIntegers);
	} else {
		return parseInt(oddIntegers);
	}
}


