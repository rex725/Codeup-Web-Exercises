function digPow(n, p){
	nString = n.toString();
	nArray = nString.split('');
	var nPowTotal = 0;
	var k = 1;
	for(var i = 0; i < nArray.length; i++) {
		nPowTotal += Math.pow(parseInt(nArray[i]), (p + i));
	}
	while(k <= (nPowTotal/nArray.length)) {
		if (n * k === nPowTotal ) {
			return k;
		}
		k++;
	}
	return -1;
}


